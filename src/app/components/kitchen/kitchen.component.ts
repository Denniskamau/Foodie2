import { Component, OnInit } from '@angular/core';
import {KitchenService} from '../../services/kitchen.service';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
order: any [];

  constructor(private kitchenservice: KitchenService) { }

  ngOnInit() {
  }





}
