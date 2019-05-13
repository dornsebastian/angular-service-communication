import {Component, OnInit} from '@angular/core';
import {StateService} from '../state.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {

  constructor(public stateService: StateService) {
  }

  ngOnInit() {
  }

}
