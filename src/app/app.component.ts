import { Component } from '@angular/core';
import { ReduxServiceService } from './redux.service';
import { totalSelector } from './redux/selectors';
import { actions } from './redux/actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-redux';
  counter: {
    counter: number,
    total: number
  } ;

  constructor(private reduxService: ReduxServiceService) {
    this.reduxService.connect((s) => this.counter = totalSelector(s));
  }

  increment() {
    this.reduxService.store.dispatch(actions.increment());
  }
}
