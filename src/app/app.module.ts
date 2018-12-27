import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloModule } from './hello/hello.module';
import { WelcomeModule } from './welcome/welcome.module';
import { DayModule } from './day/day.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloModule,
    WelcomeModule,
    DayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
