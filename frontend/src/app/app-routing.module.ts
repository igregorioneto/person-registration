import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';

const routes: Routes = [
  {
    path: '',
    component: ListPersonComponent,
  },
  {
    path: 'create',
    component: CreatePersonComponent,
  },
  {
    path: 'persons/:id',
    component: ViewPersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
