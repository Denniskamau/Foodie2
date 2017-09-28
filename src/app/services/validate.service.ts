import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateOrder(order) {
    if (order.Table === undefined ||
      order.Item === undefined ||
       order.Size === undefined || order.Spice === undefined ||
        order.Accompaniments === undefined) {
      return false;
    }else {
      return true;
    }
  }

}
