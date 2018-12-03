import { JardinagemRouting } from './jardinagem.routing';
import { JardinagemComponent } from './jardinagem/jardinagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ProdutoService} from '../produto/produto.service';
import { CarrinhoService } from '../carrinho/carrinho.service';


@NgModule({
    declarations: [
        JardinagemComponent,
    
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        JardinagemRouting
    ],
    providers: [
        // Serviços
        ProdutoService,
        CarrinhoService
    ]
})

export class JardinagemModule { }