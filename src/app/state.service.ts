import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  changeState() {
    this.state.next(!this.state.getValue());
  }
}
