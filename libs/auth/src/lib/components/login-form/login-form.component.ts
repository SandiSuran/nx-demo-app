import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Authenticate } from '../../../../../data-models';
@Component({
  selector: 'demo-app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  constructor() {}

  @Output() submitEvt = new EventEmitter<Authenticate>();

  ngOnInit(): void {}

  login(data: Authenticate) {
    this.submitEvt.emit(data);
  }
}
