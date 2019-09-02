import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';

import { ItemService } from './shared/item.service';
import { AppComponent } from './app.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { appRoutes } from '../routes';
import { LoginComponent } from './login/login.component';



@NgModule({
   declarations: [
      AppComponent,
      CatalogPageComponent,
      ItemPageComponent,
      HomePageComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatGridListModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatPaginatorModule,
      MatIconModule,
      MatTableModule,
      MatSidenavModule,
      FlexLayoutModule,
      MatCardModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      ItemService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }




