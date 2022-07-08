import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksfilterComponent } from './components/booksfilter/booksfilter.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

const routes: Routes = [
  {path: 'checkout', component:CheckoutComponent},
  {path: 'shopping-cart', component: ShoppingcartComponent},
  {path: 'myorders', component: MyordersComponent},
  {path: '', component: BooksfilterComponent}, 
  {path: 'filter', component: BooksfilterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
