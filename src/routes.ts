import { Routes, RouterModule} from "@angular/router";
import { HomePageComponent } from './app/home-page/home-page.component';
import { CatalogPageComponent } from './app/catalog-page/catalog-page.component';
import {  ItemPageComponent } from './app/item-page/item-page.component';



export const appRoutes:Routes =[
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'catalog', component: CatalogPageComponent},
    {path: 'item/:id', component: ItemPageComponent},
]