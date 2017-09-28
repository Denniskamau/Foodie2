import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { HomeComponent } from './components/home/home.component';
import {KitchenService} from './services/kitchen.service';
import {ValidateService} from './services/validate.service';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'waiter', component: WaiterComponent},
  {path: 'kitchen', component: KitchenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KitchenComponent,
    WaiterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [KitchenService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
