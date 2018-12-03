import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ConstrucaoComponent } from './construcao/construcao.component';

const construcaoRoutes: Routes = [
    { path: '', component: ConstrucaoComponent}
];


@NgModule({
    imports: [RouterModule.forChild(construcaoRoutes)],
    exports: [RouterModule]
  })

  export class ConstrucaoRouting {}