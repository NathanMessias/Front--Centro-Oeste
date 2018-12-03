import { Component } from '@angular/core';
import { Categoria } from './dominio/categoria/categoria';
import { Router } from '@angular/router';
import { CategoriaService } from './dominio/categoria/categoria.service';
import { CarrinhoWidget } from './dominio/carrinho/carrinho-widget/carrinho-widget.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prog-web-front';

  categorias: Categoria[];

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    //private carrinhoWidget: CarrinhoWidget
  ){}

  ngOnInit() {
        
    this.categoriaService.buscarTodos()
    .subscribe(resposta => {
      this.categorias = resposta;
      console.log(this.categorias );
    });

  }
}
