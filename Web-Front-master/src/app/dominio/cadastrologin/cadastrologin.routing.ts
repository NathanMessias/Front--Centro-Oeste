import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CadastrologinComponent } from './cadastrologin/cadastrologin.component';
import { LoginHomeComponent } from './login-home/login-home.component';

const cadastrologinRoutes: Routes = [
    { path: '', component: CadastrologinComponent},
    { path: '', component: LoginHomeComponent}
];


@NgModule({
    imports: [RouterModule.forChild(cadastrologinRoutes)],
    exports: [RouterModule]
  })

  export class CadastrologinRouting {}