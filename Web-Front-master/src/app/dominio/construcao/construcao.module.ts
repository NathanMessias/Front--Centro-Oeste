import { ConstrucaoRouting } from './construcao.routing';
import { ConstrucaoComponent } from './construcao/construcao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        ConstrucaoComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        ConstrucaoRouting
    ],
    providers: [
        // Serviços
    ]
})

export class ConstrucaoModule { }