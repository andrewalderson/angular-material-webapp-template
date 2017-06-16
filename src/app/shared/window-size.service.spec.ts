import {WindowSizeService, WindowSize} from "./window-size.service";

describe("WindowSizeService", () => {

    const initialWindowWidth = 134;
    const initialWindowHeight = 356;
    const mockWindow = {
        handlers: [], 
        innerWidth: initialWindowWidth, 
        innerHeight: initialWindowHeight, 
        addEventListener: (eventName, handler) => {mockWindow.handlers.push(handler)}, 
        removeEventListener: () => {},
        dispatchEvent(event) {
            this.handlers[0].apply(this.handlers[0].scope, event);
        }};
    let service: WindowSizeService;

    beforeEach(() => {
        service = new WindowSizeService(mockWindow);
    });

    it("should notify subscribers of the current window size when they first subscribe", () => {
        let windowSize: WindowSize;
        service.windowSizeChanged$.subscribe((size) => {
            windowSize = size;
        });

        expect(windowSize.width).toEqual(initialWindowWidth);
        expect(windowSize.height).toEqual(initialWindowHeight);
    });

    it("should notify subscribers with new window size when the window size changes", () => {
        let windowSize: WindowSize;
        service.windowSizeChanged$.subscribe((size) => {
            windowSize = size;
        });

        const resizedWindowWidth = 462;
        const resizedWindowHeight = 1123;

        mockWindow.innerWidth = resizedWindowWidth;
        mockWindow.innerHeight = resizedWindowHeight;
        mockWindow.dispatchEvent(new Event('resize'))

        // need this time out becuase the event is delayed in reporting based on the WindowSizeService.reportingInterval
        setTimeout(() => {
            expect(windowSize.width).toEqual(resizedWindowWidth);
            expect(windowSize.height).toEqual(resizedWindowHeight);
        }, WindowSizeService.reportingInterval)
        
    }, WindowSizeService.reportingInterval)
});