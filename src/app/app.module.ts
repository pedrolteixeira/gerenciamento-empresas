import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FuncionariosNewComponent } from './funcionarios/funcionarios.new/funcionarios.new.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FuncionariosIndexComponent } from './funcionarios/funcionarios.index/funcionarios.index.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    FuncionariosIndexComponent,
    ProdutosComponent,
    ClientesComponent,
    SidebarComponent,
    FuncionariosNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
