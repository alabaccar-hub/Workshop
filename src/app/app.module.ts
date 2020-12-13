import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { EditVolComponent } from './edit-vol/edit-vol.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewVolComponent } from './view-vol/view-vol.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddVolComponent,
    EditVolComponent,
    ViewVolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
