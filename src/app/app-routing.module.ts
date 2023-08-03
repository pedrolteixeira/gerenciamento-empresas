import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { FuncionariosIndexComponent } from './funcionarios/funcionarios.index/funcionarios.index.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FuncionariosNewComponent } from './funcionarios/funcionarios.new/funcionarios.new.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'funcionarios', component: FuncionariosIndexComponent },
  { path: 'new-funcionario', component: FuncionariosNewComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'clientes', component: ClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
