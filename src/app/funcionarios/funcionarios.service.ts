import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private funcionarios: any[] = [];
  private viaCepUrl = 'https://viacep.com.br/ws/';

  constructor(
    private http: HttpClient
  ) {}

  adicionarFuncionario(funcionario: any) {
    this.funcionarios.push(funcionario);
  }

  obterFuncionarios() {
    return this.funcionarios;
  }

  obterEndereco(cep: string): any {
    const url = `${this.viaCepUrl}${cep}/json/`;
    return this.http.get(url);
  }
}
