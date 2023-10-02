import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.index.component.html',
  styleUrls: ['./funcionarios.index.component.css']
})
export class FuncionariosIndexComponent {
  funcionarios: any[] | undefined;

  constructor(private funcionariosService: FuncionariosService, private router: Router) {}

  ngOnInit(): void {
    this.funcionarios = this.funcionariosService.obterFuncionarios();
  }

  excluirFuncionario(funcionario: any) {
    this.funcionarios?.splice(this.funcionarios.indexOf(funcionario), 1)
  }

  criarFuncionario() {
    this.router.navigate(['/new-funcionario']);
  }
}
