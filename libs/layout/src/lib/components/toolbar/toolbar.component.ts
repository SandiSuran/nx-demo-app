import { Component, Input, OnInit } from '@angular/core';
import { User } from '@demo-app/data-models';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit(): void {}
}
