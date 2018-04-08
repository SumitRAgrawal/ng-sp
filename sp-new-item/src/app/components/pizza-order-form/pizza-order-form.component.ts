import { PizzaCustomer } from './../../models/pizza-customer';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

import { SPService } from '../../services';
import { PeoplePickerUser } from '../../models/people-picker.response';
import { PizzaOrder } from './../../models';

@Component({
  selector: 'app-pizza-order-form',
  templateUrl: './pizza-order-form.component.html',
  styleUrls: ['./pizza-order-form.component.css']
})
export class PizzaOrderFormComponent implements OnInit {
  header = 'New Pizza Order Form';
  form: FormGroup;
  pizzaOptions = [];
  pizza = new PizzaOrder();
  customer = new PizzaCustomer();
  constructor(
    private fb: FormBuilder,
    private spService: SPService,
    private msg: MessageService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      customer: '',
      pizzaName: '',
      quantity: ''
    });

    this.spService.getPizzaOptions().subscribe(pizzaChoicesResponse => {
      pizzaChoicesResponse[0].Choices.forEach(choice => {
        this.pizzaOptions = [...this.pizzaOptions, { value: choice }];
      });
    });
  }

  getUser(event: PeoplePickerUser) {
    this.customer.FieldName = 'CustomerName';
    this.customer.FieldValue = JSON.stringify([event]);
  }

  onSubmit(value) {
    this.pizza.PizzaName = this.form.get('pizzaName').value.value;
    this.pizza.Quantity = parseInt(this.form.get('quantity').value, 10);
    this.spService.savePizza(this.pizza, this.customer).subscribe(res => {
      this.msg.add({ severity: 'success', summary: 'Order placed!' });
    });
  }
}
