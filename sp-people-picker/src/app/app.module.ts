import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeoplePickerComponent } from './people-picker/people-picker.component';
import { SPService } from './services/sp.service';

@NgModule({
  declarations: [AppComponent, PeoplePickerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AutoCompleteModule,
    HttpClientModule
  ],
  providers: [SPService],
  bootstrap: [AppComponent]
})
export class AppModule {}
