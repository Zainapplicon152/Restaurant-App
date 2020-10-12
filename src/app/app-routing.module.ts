import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddRestoComponent} from "./add-resto/add-resto.component";
import {UpdateRestoComponent} from "./update-resto/update-resto.component";
import {ListRestoComponent} from "./list-resto/list-resto.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: 'Add',
    component: AddRestoComponent
  },
  {
    path: 'update/:id',
    component: UpdateRestoComponent
  },
  {
    path: 'List',
    component: ListRestoComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
