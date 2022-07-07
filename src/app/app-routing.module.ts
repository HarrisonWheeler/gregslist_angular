import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsPageComponent } from './car-details-page/car-details-page.component';

const routes: Routes = [
  {path: 'car-details-page/:id', component: CarDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
