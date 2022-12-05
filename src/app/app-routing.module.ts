import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./split-button/split-button.module').then(m => m.SplitButtonModule)
  }, 
  {
    path: 'dialog', 
    component: DialogDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
