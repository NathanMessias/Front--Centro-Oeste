import { Component, OnInit } from '@angular/core';
import {Produto} from '../../produto/produto';
import {ProdutoService} from '../../produto/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../../carrinho/carrinho.service';

@Component({
  selector: 'jardinagem',
  templateUrl: './jardinagem.component.html',
  styleUrls: ['./jardinagem.component.css']
})
export class JardinagemComponent implements OnInit {


  produtos: Produto[];

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService : CarrinhoService,
    private router: Router
  ){}

  ngOnInit() {
      
    this.produtoService.buscarTodos()
    .subscribe(resposta => {
      this.produtos = resposta
    });

  }
    //constructor(){}

    //ngOnInit() {}

}
