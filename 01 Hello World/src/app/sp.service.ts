import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { sp, Web } from '@pnp/sp';
import { environment } from '../environments/environment';

const web = new Web(environment.web);

@Injectable()
export class SPService {
  constructor(private http: Http) {}

  getWebTitle(): Observable<any> {
    return Observable.fromPromise(web.get());
  }
}
