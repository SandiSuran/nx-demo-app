import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@demo-app/data-models';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;
  constructor() {}

  ngOnInit(): void {}
}
