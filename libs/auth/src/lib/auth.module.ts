import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '@demo-app/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];

const COMPONENTS = [LoginComponent, LoginFormComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}
