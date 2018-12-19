import { CadastrologinRouting } from './cadastrologin.routing';
import { CadastrologinComponent } from './cadastrologin/cadastrologin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoginHomeComponent } from './login-home/login-home.component';
import {SocialLoginModule, AuthServiceConfig, FacebookLoginProvider, AuthService} from 'ng4-social-login';


const config = new AuthServiceConfig([
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('2321259774759931')
    }
    ],false);
    
    export function provideConfig(){
        return config;
    }
    

@NgModule({
    declarations: [
        CadastrologinComponent,
        LoginHomeComponent
    
    ],
    imports: [
        // Angular
        SocialLoginModule,
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
        AuthService,
        {provide: AuthServiceConfig, useFactory: provideConfig}
    ]
})

export class CadastrologinModule { }