import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { MaquinaComponent } from './maquina/maquina.component';

const maquinaRoutes: Routes = [
    { path: '', component: MaquinaComponent}
];


@NgModule({
    imports: [RouterModule.forChild(maquinaRoutes)],
    exports: [RouterModule]
  })

  export class MaquinaRouting {}