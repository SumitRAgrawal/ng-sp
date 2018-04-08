import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGModule } from './primeng.module';
import { MessageService } from 'primeng/components/common/messageservice';
import { DatePipe } from '@angular/common';
import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';

import { SPService } from './services';
import { PeoplePickerComponent } from './components/people-picker/people-picker.component';
import { PizzaOrderFormComponent } from './components/pizza-order-form/pizza-order-form.component';

@NgModule({
  declarations: [AppComponent, PeoplePickerComponent, PizzaOrderFormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SPService, MessageService, ConfirmationService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
