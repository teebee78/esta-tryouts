import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SbbMenuModule} from '@sbb-esta/angular/menu';
import {SbbDialogModule} from '@sbb-esta/angular/dialog';
import {SbbButtonModule} from '@sbb-esta/angular/button';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DialogDemoComponent,
    DialogContentComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    SbbMenuModule,
    SbbDialogModule,
    SbbButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
