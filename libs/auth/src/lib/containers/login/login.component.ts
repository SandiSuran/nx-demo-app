import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Login } from '../../+state/auth.actions';
import { AuthPartialState } from '../../+state/auth.reducer';
import { Authenticate } from '@demo-app/data-models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AuthPartialState>) {}

  ngOnInit(): void {}
  login(authenticate: Authenticate) {
    this.store.dispatch(new Login(authenticate));
  }
}
