import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Authenticate } from '../../../../../data-models';
@Component({
  selector: 'demo-app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  @Output() submitEvt = new EventEmitter<Authenticate>();

  loginForm = this.fb.group({
    username: [, Validators.required],
    password: [, Validators.required],
  });

  ngOnInit(): void {}

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submitEvt.emit({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    } as Authenticate);
  }
}
