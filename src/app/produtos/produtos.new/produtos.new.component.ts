import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from '../produtos.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produtos.new',
  templateUrl: './produtos.new.component.html',
  styleUrls: ['./produtos.new.component.css']
})
export class ProdutosNewComponent {
  formData: any = {};
  temErro: boolean = false;

  constructor(
    public router: Router,
    public produtoService: ProdutosService,
    public toastr: ToastrService
  ) { }

  salvar() {
    this.produtoService.cadastrarProduto(this.formData).subscribe(
      () => {
        this.toastr.success('Produto cadastrado com sucesso!');
        this.router.navigate(['produtos'])
      },
      (error) => {
        this.toastr.error('Ocorreu um erro ao cadastrar o produto!');
      }
    );
  }

  cancelar() {
    this.router.navigate(['/produtos']);
  }

}
