import { Component, OnInit } from '@angular/core';

import { Produto } from '../../produto/produto';
import { ProdutoService } from '../../produto/produto.service';

import { Subscription, Observable, of } from 'rxjs';
import { CarrinhoService } from '../carrinho.service';
import { Carrinho } from '../carrinho';

import { Router } from '@angular/router';
import { ItemCarrinho } from '../../itemCarrinho/itemCarrinho';

@Component({
  selector: 'carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
  itensCarrinho: ItemCarrinho[];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.consultarCarrinho();
  }

  aumentarQuantidadeItemCarrinho(index: number) {
    this.itensCarrinho[index].quantidade++;
    localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho));
  }

  diminuirQuantidadeItemCarrinho(index: number) {
    if (this.itensCarrinho[index].quantidade === 1) {
      this.itensCarrinho.splice(index, 1);
    } else {
      this.itensCarrinho[index].quantidade--;
    }
    localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho));
  }

  excluirItemCarrinho(index: number) {
    this.itensCarrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(this.itensCarrinho));
  }

  valorTotalCarrinho() {
    let total = 0;
    this.itensCarrinho.forEach(itemCarrinho => {
      total += itemCarrinho.quantidade * itemCarrinho.produto.preco;
    });

    return total;
  }
}
