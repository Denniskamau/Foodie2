import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class KitchenService {
  order: {};

  constructor(private http: Http) { }

  // Function to take the order
  postOrder(order) {
    const headers = new Headers();
    console.log('posting');
    headers.append('Content-Type', ' application/json');
    return this.http.post('http://localhost:3000/users/order', JSON.stringify( order), {headers: headers})

          .map(res => res.json());

  }

}
