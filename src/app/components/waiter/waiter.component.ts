import { Component, OnInit } from '@angular/core';
import {KitchenService} from '../../services/kitchen.service';
import {ValidateService} from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {
  Table: String;
  Item: String;
  Size: String;
  Spice: String;
  Accompaniments: String;
  item= '';
  selected = [];


  selectChangeHandler (event: any) {
    this.selected = event.target.value;
    this.selected.push(this.selected);


  }



  constructor(
    private kitchenservice: KitchenService,
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService
  ) {
   }

  ngOnInit() {
  }

  sendItem() {
    const order = {
      Table: this.Table,
      Item: this.Item,
      Size: this.Size,
      Spice: this.Spice,
      Accompaniments: this.Accompaniments
    };
    console.log('service working');
    // Post order
    this.kitchenservice.postOrder(this.item).subscribe(data => this.item = data);


        if (!this.validateService.validateOrder(order)) {
      this.flashMessages.show('please fill out the fields', {cssClass: 'alert-danger', timeout : 3000});
      return false;
    }

  }

}
