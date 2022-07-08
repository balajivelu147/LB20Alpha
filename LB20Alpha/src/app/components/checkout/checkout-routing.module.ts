import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyordersComponent } from '../myorders/myorders.component';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';

const routes: Routes = [
  {path: 'shopping-cart', component: ShoppingcartComponent},
  {path: 'myorders', component: MyordersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
