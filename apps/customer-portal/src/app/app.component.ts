import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthPartialState, LoginSuccess } from '@demo-app/auth';

@Component({
  selector: 'demo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'customer-portal';

  constructor(private store: Store<AuthPartialState>) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.store.dispatch(new LoginSuccess(user));
    }
  }
}
