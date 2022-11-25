import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonDemoComponent } from './split-button-demo/split-button-demo.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { RouterModule, Routes } from '@angular/router';
import { SbbMenuModule } from '@sbb-esta/angular/menu';


const routes: Routes = [
  {
    path: '', 
    component: SplitButtonDemoComponent
  }
]

@NgModule({
  declarations: [
    SplitButtonDemoComponent,
    SplitButtonComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    SbbMenuModule
  ]
})
export class SplitButtonModule { }
