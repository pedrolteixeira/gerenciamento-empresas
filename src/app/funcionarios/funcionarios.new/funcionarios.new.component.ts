import { Component } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios.new',
  templateUrl: './funcionarios.new.component.html',
  styleUrls: ['./funcionarios.new.component.css']
})
export class FuncionariosNewComponent {
  formData: any = {};
  temErro: boolean = false;

  constructor(
    private funcionariosService: FuncionariosService,
    private router: Router
    ) {}

  submitForm() {
    // Adicionar funcionário ao serviço
    this.funcionariosService.adicionarFuncionario(this.formData);
    // Limpar o formulário após adicionar o funcionário
    this.formData = {};
    this.router.navigate(['/funcionarios']);
  }

  buscarEndereco() {
    if (!this.formData.cep) {
      this.formData.endereco = '';
      this.formData.bairro = '';
      this.formData.cidade = '';
      this.formData.estado = '';
    }
    this.funcionariosService.obterEndereco(this.formData.cep).subscribe(
      (data: any) => {
        this.formData.endereco = data.logradouro;
        this.formData.bairro = data.bairro;
        this.formData.cidade = data.localidade;
        this.formData.estado = data.uf;
        this.temErro = false;
        // Outros campos do formulário podem ser atualizados aqui também
      },
      (error : any) => {
        if (this.formData.cep) {
          this.temErro = true;
        }
      }
    );
  }
}
