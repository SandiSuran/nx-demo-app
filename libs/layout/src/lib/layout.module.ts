import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@demo-app/material';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [LayoutComponent, ToolbarComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
