import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'book-details/:id', component:BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
