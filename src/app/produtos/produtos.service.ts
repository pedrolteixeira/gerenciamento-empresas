import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private apiUrl = 'https://localhost:5001/produto/api';

  constructor(private http: HttpClient) { }

  cadastrarProduto(produto: any) {
    return this.http.post(this.apiUrl, produto);
  }

  excluirProduto(produto: any) {
    return this.http.delete(`${this.apiUrl}/${produto}`);
  }

  listarProduto() {
    return this.http.get(this.apiUrl);
  }
}
