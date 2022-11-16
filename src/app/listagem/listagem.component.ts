import { ListagemService } from './listagem.service';
import { Component, OnInit } from '@angular/core';
import { ClienteDto } from '../dto/clienteDto';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})


export class ListagemComponent implements OnInit {
  clientes: ClienteDto[] | undefined;
  clienteSelecionado: ClienteDto | undefined;
  cliente: ClienteDto;
  constructor(
    private listagemService: ListagemService,
    private router: Router,
    private messageService: MessageService,
  ) {
    this.cliente = new ClienteDto;
    this.clientes = this.listagemService.obterCliente();
  }

  async ngOnInit(): Promise<void> {

  }
  novoCadastro() {
    this.router.navigate(["/cadastro"]);
  }

  abrirDetalheCliente(cliente: ClienteDto) {
    let cpf = cliente.cpf;
    this.router.navigate(["/cadastro", cpf]);
  }
  async excluirSelecionado(cliente: ClienteDto) {
    localStorage.removeItem(cliente.cpf!);
    location.reload();
  }
}
