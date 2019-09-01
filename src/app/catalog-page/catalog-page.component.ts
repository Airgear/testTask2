import { Component, OnChanges, Input} from '@angular/core';
import {ItemService} from '../shared/item.service';


@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnChanges {
  @Input() filterBy?: string ='all'
  visibleItem:any[] = [];
 
  constructor(private itemService: ItemService) { 

      this.visibleItem = this.itemService.getItems();
      console.log(this.visibleItem);

    }

    ngOnChanges(){
      this.visibleItem = this.itemService.getItems()
    }
}
