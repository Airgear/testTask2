import { Component, OnInit } from '@angular/core';
import {ItemService} from '../shared/item.service';


@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {

    items:any[] = [];

  constructor(
    private itemService: ItemService
    ) { 

      this.items = this.itemService.getItems();
      console.log(this.items);

    }

  ngOnInit() {
  }

}
