import { PizzaCustomer } from './../models/pizza-customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Web } from '@pnp/sp';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { mergeMap } from 'rxjs/operators';

import { PizzaOrder, PeoplePickerQuery, FormDigestResponse } from './../models';
const web = new Web(environment.web);
const PEOPLE_PICKER_URL =
  '_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser';

@Injectable()
export class SPService {
  constructor(private http: HttpClient) {}

  getWebTitle(): Observable<any> {
    return Observable.fromPromise(web.get());
  }

  getPizzaOptions(): Observable<any> {
    return Observable.fromPromise(
      web.lists
        .getByTitle('PizzaOrders')
        .fields.filter(`EntityPropertyName eq 'PizzaName'`)
        .get()
    );
  }
  getUserSuggestions(query: PeoplePickerQuery): Observable<any> {
    return this.http.post(`${environment.web}/_api/contextinfo`, '').pipe(
      mergeMap((xRequest: FormDigestResponse) => {
        const digest = xRequest.FormDigestValue;
        const headers = new HttpHeaders({
          accept: 'application/json;odata=verbose',
          'X-RequestDigest': digest
        });
        const httpOptions = {
          headers: headers
        };
        return this.http.post(
          `${environment.web}${PEOPLE_PICKER_URL}`,
          query,
          httpOptions
        );
      })
    );
  }

  savePizza(pizza: PizzaOrder, customer: PizzaCustomer): Observable<any> {
    return Observable.fromPromise(
      web.lists
        .getByTitle('PizzaOrders')
        .items.add(pizza)
        .then(itemCreated => {
          return web.lists
            .getByTitle('PizzaOrders')
            .items.getById(itemCreated.data.ID)
            .validateUpdateListItem([customer]);
        })
    );
  }
}
