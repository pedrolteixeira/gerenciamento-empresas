import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

import { FuncionariosIndexComponent } from './funcionarios/funcionarios.index/funcionarios.index.component';
import { FuncionariosNewComponent } from './funcionarios/funcionarios.new/funcionarios.new.component';

import { ProdutosIndexComponent } from './produtos/produtos.index/produtos.component';
import { ProdutosNewComponent } from './produtos/produtos.new/produtos.new.component';

import { ClientesComponent } from './clientes/clientes.component';



const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'funcionarios', component: FuncionariosIndexComponent },
  { path: 'produtos', component: ProdutosIndexComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'new-funcionario', component: FuncionariosNewComponent },
  { path: 'new-produto', component: ProdutosNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
