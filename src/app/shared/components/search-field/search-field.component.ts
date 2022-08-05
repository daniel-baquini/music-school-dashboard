import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { BorderedFieldComponent } from '../bordered-field/bordered-field.component';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, of, Subject, Subscription, switchMap } from 'rxjs';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements AfterViewInit, OnDestroy {
    
    @ViewChild("searchField") searchField!: BorderedFieldComponent;
    
    @Input() debounceTimeMs: number = 500;
    @Input() label: string = "";
    // Sometimes, we want the search to start only after a certain number of characters are entered.
    // That's why this property exists
    @Input() minCharReset: number = 2;
    @Input() searchCallback: ((searchTerm: string) => Observable<any>) = (searchTerm: string) => {
        return of([])
    }

    @Output() fetchedEvent = new EventEmitter<any>();
    @Output() inputEvent = new EventEmitter<string>();
    @Output() searchingStartedEvent = new EventEmitter();

    // After the user deletes the content in the search field, if he tries to input again the same value,
    // the field will start a new seach because "distinctUntilChanged" default behavior. That's why we
    // have a reset property, that will allow any value to start a search (if it is equal to the old value)
    // after the user deleted the field content
    private _reseted: boolean = false;
    private _subject = new Subject<string>();
    private _subscriptions: Subscription[] = [];

    ngAfterViewInit(): void {
        this._subscriptions.push(
            this._subject.asObservable().pipe(
                map(x => `${x}`.trim().toLowerCase()),
                filter((searchTerm: string) => searchTerm.length > this.minCharReset),
                debounceTime(this.debounceTimeMs),
                distinctUntilChanged((prev, current) => {
                    if(this._reseted) {
                        this._reseted = false;
                        return false;
                    }
                    return prev === current;
                }),
                switchMap(searchTerm => {
                    this.searchingStartedEvent.emit();
                    return this.searchCallback(searchTerm);
                })
            ).subscribe(x => {
                this.fetchedEvent.emit(x);
            })
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());
    }

    onInput(event: Event): void {
        const value: string = `${(event.target as HTMLInputElement).value}`.trim();
        // Why an if statement instead of a ternary operator?
        // Beucase, using a ternary operator, the "_reseted" property can be
        // assigned "false", unreseting the field. Te field will only be reseted inside
        // "distinctUntilChanged"
        if(value.length <= this.minCharReset) {
            this._reseted = true;
        }

        this.inputEvent.emit(value);
        this._subject.next(value);
    }

}
