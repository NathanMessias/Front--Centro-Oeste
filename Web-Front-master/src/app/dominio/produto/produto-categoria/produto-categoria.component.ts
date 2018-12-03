import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Categoria } from '../../categoria/categoria';
import { CategoriaService } from '../../categoria/categoria.service';
import { CarrinhoService } from '../../carrinho/carrinho.service';

@Component({
  selector: 'produto-lista',
  templateUrl: './produto-categoria.component.html',
  styleUrls: ['./produto-categoria.component.css']
})
export class ProdutoCategoriaComponent implements OnInit {

  produtos: Produto[];

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoService : CarrinhoService,
    private router: Router
  ){}

  ngOnInit() {
      
    // recuperar o id da categoria
    let categoriaId = this.route.snapshot.params['id'];

    this.produtoService.buscarPelaCategoria(categoriaId)
    .subscribe(resposta => {
      this.produtos = resposta
    });

  }

  adicionarProduto(produto: Produto){
    this.carrinhoService.inserirCarrinho(produto);
  }

}
