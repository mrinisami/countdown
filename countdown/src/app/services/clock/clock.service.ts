import { EventEmitter, Injectable } from "@angular/core";
import { Observable, Subject, filter, interval, map, take, tap } from "rxjs";
import { Timer } from "./models";

@Injectable({
    providedIn: 'root'
})
export class ClockService {
    public progressSubject = new Subject<Timer>;
    public progress = this.progressSubject.asObservable();
    public isDone = new EventEmitter<boolean>();
    private timer: number = 1;

    constructor() {

    }

    startTimer(timer: number) {
        const tick = 0.1 / timer;

        interval(100)
            .pipe(
                take(timer * 10),
                tap(time => {
                    this.timer -= tick;
                    this.progressSubject.next({ bar: this.timer, timeLeft: timer - time / 10 - 0.1 })
                }),
                filter(time => time === timer * 10 - 1),
                tap(() => this.isDone.emit()))
            .subscribe()
    }
}