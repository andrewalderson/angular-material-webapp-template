import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { WINDOW } from 'ngx-window-token';

export interface WindowSize {
    readonly width: number;
    readonly height: number;
}

@Injectable()
export class WindowSizeService {

    static readonly reportingInterval = 100;

    constructor( @Inject(WINDOW) private _window: any ) {
        Observable.fromEvent(_window, 'resize')
        .auditTime(WindowSizeService.reportingInterval)
        .map(event => <WindowSize>{width: _window.innerWidth, height: _window.innerHeight})
        .subscribe((windowSize) => {
            this.windowSizeChanged$.next(windowSize);
        });
    }

    readonly windowSizeChanged$ = new BehaviorSubject<WindowSize>(<WindowSize>{width: this._window.innerWidth, height: this._window.innerHeight});
}