import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';
import { ProdutoCategoriaComponent } from './produto-categoria/produto-categoria.component';

const produtoRoutes: Routes = [
    { path: '', component: ProdutoListaComponent},
    { path: 'visualizar/:id', component: ProdutoFormularioComponent},
    { path: 'novo', component: ProdutoFormularioComponent},
    { path: 'alterar/:id', component: ProdutoFormularioComponent},
    { path: 'categoria/:id', component: ProdutoCategoriaComponent}, 
];


@NgModule({
    imports: [RouterModule.forChild(produtoRoutes)],
    exports: [RouterModule]
  })

  export class ProdutoRouting {}