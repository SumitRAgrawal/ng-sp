import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';

import { PeoplePickerQuery } from '../models/people-picker.query';
import { FormDigestResponse } from '../models/people-picker.response';

const PEOPLE_PICKER_URL =
  '_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser';

@Injectable()
export class SPService {
  constructor(private http: HttpClient) {}

  public getUserSuggestions(query: PeoplePickerQuery): Observable<any> {
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
}
