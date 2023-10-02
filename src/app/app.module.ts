import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ProdutosIndexComponent } from './produtos/produtos.index/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FuncionariosNewComponent } from './funcionarios/funcionarios.new/funcionarios.new.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FuncionariosIndexComponent } from './funcionarios/funcionarios.index/funcionarios.index.component';
import { ProdutosNewComponent } from './produtos/produtos.new/produtos.new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    FuncionariosIndexComponent,
    ProdutosIndexComponent,
    ClientesComponent,
    SidebarComponent,
    FuncionariosNewComponent,
    ProdutosNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
