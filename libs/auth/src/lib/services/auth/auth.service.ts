import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Authenticate, User } from '@demo-app/data-models';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', authenticate)
      .pipe(
        tap((user: User) => {
          this.userSubject$.next(user);
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['']);
        })
      );
  }

  logout() {
    this.userSubject$.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
}
