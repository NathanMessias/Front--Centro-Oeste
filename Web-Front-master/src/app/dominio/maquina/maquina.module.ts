import { MaquinaRouting } from './maquina.routing';
import { MaquinaComponent } from './maquina/maquina.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        MaquinaComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        MaquinaRouting
    ],
    providers: [
        // Serviços
    ]
})

export class MaquinaModule { }