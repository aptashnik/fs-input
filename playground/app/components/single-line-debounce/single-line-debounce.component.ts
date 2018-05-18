import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'single-line-debounce',
  templateUrl: 'single-line-debounce.component.html'
})
export class SingleLineDebounceComponent implements OnInit {

  debounceChange$ = new Subject<string>();
  debounceValue: String = '';

  constructor() {  }

  ngOnInit() {
    this.debounceChange$
    .debounceTime(600)
    .distinctUntilChanged()
    .subscribe((value) => {
      this.debounceValue = value;
    });
  }
}
