import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosIndexComponent {

  public produtos: any = [];
  public tipoOrdenacao: number = 0;

  constructor(
    public router: Router,
    public produtosService: ProdutosService,
    public toastr: ToastrService
  ){ }

  ngOnInit() {
    this.listaProdutos();
  }

  listaProdutos() {
    this.produtosService.listarProduto().subscribe(resultado => this.produtos = resultado);
  }

  excluirProduto(produto: any) {
    this.produtosService.excluirProduto(produto).subscribe(() => {
      this.toastr.success('Produto excluído com sucesso!');
      this.listaProdutos();
    },
    (error) => {
      this.toastr.error('Ocorreu um erro ao excluir o produto');
    });
  }

  criarProduto() {
    this.router.navigate(['/new-produto']);
  }
}
