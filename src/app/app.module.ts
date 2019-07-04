import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { SignInComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';

import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WarnerService } from './shared/warning/warner.service';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SignInComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    SharedModule,

    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [WarnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
