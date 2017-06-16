import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WindowSizeService } from '../../shared/window-size.service';

@Injectable()
export class AppSidenavStateService {

    constructor(windowSizeService: WindowSizeService) {
        windowSizeService.windowSizeChanged$.subscribe(windowSize => {
            this._isOpen = windowSize.width > this.closableBreakpoint;
            this._isClosable = windowSize.width < this.closableBreakpoint;
        });
    }

    private closableBreakpoint = 992;

    private _isOpen: boolean

    get isOpen(): boolean {
        return this._isOpen;
    }

    private _isClosable: boolean;
    
    get isClosable(): boolean {
        return this._isClosable;
    }

    toggleNavigation() {
        this._isOpen = !this._isOpen;
    }
}