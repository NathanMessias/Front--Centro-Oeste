import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const appRoutes: Routes = [
   // { path: '', redirectTo: '/', pathMatch: 'full'},
    {path: "", loadChildren: './dominio/home/home.module#HomeModule'},
    { path: 'home', loadChildren: './dominio/home/home.module#HomeModule'},
    { path: 'produto', loadChildren: './dominio/produto/produto.module#ProdutoModule'},
    { path: 'categoria', loadChildren: './dominio/categoria/categoria.module#CategoriaModule'},
    { path: 'jardinagem', loadChildren: './dominio/jardinagem/jardinagem.module#JardinagemModule'},
    { path: 'maquina', loadChildren: './dominio/maquina/maquina.module#MaquinaModule'},
    { path: 'construcao', loadChildren: './dominio/construcao/construcao.module#ConstrucaoModule'},
    { path: 'cadastrologin', loadChildren: './dominio/cadastrologin/cadastrologin.module#CadastrologinModule'},
    { path: 'carrinho', loadChildren: './dominio/carrinho/carrinho.module#CarrinhoModule'},
    { path: 'login', loadChildren: './dominio/cadastrologin/cadastrologin.module#CadastrologinModule'}
];



@NgModule({
    imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
    )],
    exports: [RouterModule]
  })

  export class AppRouting {}