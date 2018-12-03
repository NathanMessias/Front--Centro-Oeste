import { CadastrologinRouting } from './cadastrologin.routing';
import { CadastrologinComponent } from './cadastrologin/cadastrologin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        CadastrologinComponent,
    
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        CadastrologinRouting
    ],
    providers: [
        // Serviços
    ]
})

export class CadastrologinModule { }