import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { JardinagemComponent } from './jardinagem/jardinagem.component';

const jardinagemRoutes: Routes = [
    { path: '', component: JardinagemComponent}
];


@NgModule({
    imports: [RouterModule.forChild(jardinagemRoutes)],
    exports: [RouterModule]
  })

  export class JardinagemRouting {}