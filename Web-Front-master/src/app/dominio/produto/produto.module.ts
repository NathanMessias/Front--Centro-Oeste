import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ProdutoRouting } from './produto.routing';
import { ProdutoService } from './produto.service';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';
import { CategoriaService } from '../categoria/categoria.service';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { ProdutoCategoriaComponent } from './produto-categoria/produto-categoria.component';


@NgModule({
    declarations: [
        ProdutoListaComponent,
        ProdutoFormularioComponent,
        ProdutoCategoriaComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        ProdutoRouting
    ],
    providers: [
        // Serviços
        CategoriaService,
        ProdutoService
    ]
})

export class ProdutoModule { }