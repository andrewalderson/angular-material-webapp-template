import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppSidenavComponent } from './components/app-sidenav/app-sidenav.component';

import {WindowSizeService} from './shared/window-size.service';
import {AppSidenavStateService} from './components/app-sidenav/app-sidenav-state.service';

import { WindowTokenModule } from 'ngx-window-token';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WindowTokenModule
  ],
  providers: [WindowSizeService, AppSidenavStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
