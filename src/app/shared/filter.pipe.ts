import {Pipe, PipeTransform} from '@angular/core'






@Pipe({ 
    name: 'itemFilter'
})

export class  ItemFilterPipe implements PipeTransform {
    transform(items: any[], criteria: string): any {
        if (criteria === 'all'){
            return items;
        } else {
            return items.filter(item => item.category === criteria);
        }
    }
}