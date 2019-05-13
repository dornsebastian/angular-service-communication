import {Component, OnInit} from '@angular/core';
import {StateService} from '../state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public stateService: StateService) {
  }

  ngOnInit() {
  }

}
