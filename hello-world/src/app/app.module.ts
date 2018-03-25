import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { SPService } from './sp.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule],
  providers: [SPService],
  bootstrap: [AppComponent]
})
export class AppModule {}
