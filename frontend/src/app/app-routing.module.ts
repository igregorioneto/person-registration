import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ListPersonComponent } from './list-person/list-person.component';

const routes: Routes = [
  {
    path: '',
    component: ListPersonComponent,
  },
  {
    path: 'create',
    component: CreatePersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
