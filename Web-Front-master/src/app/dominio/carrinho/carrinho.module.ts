import { CarrinhoRouting } from './carrinho.routing';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from './carrinho.service';
import { AppComponent } from 'src/app/app.component';


@NgModule({
    declarations: [
        CarrinhoComponent, 
        //AppComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        CarrinhoRouting
    ],
    providers: [
        // Serviços
        CarrinhoService
    ]
})

export class CarrinhoModule { }