import {Component, OnDestroy, OnInit} from '@angular/core';
import {StateService} from '../state.service';
import {map, takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit, OnDestroy {

  src = 'default';
  private ngOnDestroySubject = new Subject();

  constructor(public stateService: StateService) {
  }

  ngOnInit() {
    this.stateService.state.pipe(
      // Console Ausgabe
      tap(x => console.log({stateInit: x})),

      // Beendet die Subscription, wenn die Komponente zerstört wird.
      takeUntil(this.ngOnDestroySubject),

      // Transformiert den Zustand von einen Boolean zu einem String
      map((state: boolean) => state ? '../../path/to/icon-A' : '../../path/to/icon-B'),

      // Console Ausgabe
      tap(x => console.log({stateAfterMap: x})),
    ).subscribe(
      (path: string) => this.src = path
    );
  }

  ngOnDestroy(): void {
    this.ngOnDestroySubject.next();
    this.ngOnDestroySubject.complete();
  }

}
