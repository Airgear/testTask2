import { Routes} from "@angular/router";
import { HomePageComponent } from './app/home-page/home-page.component';
import { CatalogPageComponent } from './app/catalog-page/catalog-page.component';
import {  ItemPageComponent } from './app/item-page/item-page.component';
import {  LoginComponent } from './app/login/login.component';
import { AuthGuard } from './app/auth/auth.guard';



export const appRoutes:Routes =[
    {path: '', component: HomePageComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
    {
        path: 'catalog', 
        component: CatalogPageComponent,
        canActivate: [AuthGuard]
    },
    {path: 'item/:id', component: ItemPageComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    { path: '**', component: LoginComponent }
]
