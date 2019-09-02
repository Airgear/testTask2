import { Component, OnInit } from '@angular/core';
import {ItemService} from '../shared/item.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  item:any; 

  constructor( private itemService: ItemService, private route: ActivatedRoute) {}

  ngOnInit() {


    this.item= this.itemService.getItem(
  
      +this.route.snapshot.params['id']
      
   
    )
    console.log(this.item);
  }

}
