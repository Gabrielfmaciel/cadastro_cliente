import { MessageService } from 'primeng/api';
import { Estado } from './../dto/estado';
import { CadastroService } from './cadastro.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ClienteDto } from '../dto/clienteDto';
import { Municipios } from '../dto/municipios';
import { ActivatedRoute, Router } from '@angular/router';
interface Mes {
  mes: string,
  id: number,
}
interface Ano {
  ano: string,
  id: number,
}
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {
  estados: Estado[] = [];
  municipios: Municipios[] = [];
  estadoSelecionado: string | undefined;
  cidadeSelecionada: string | undefined;
  cliente: ClienteDto;
  mesCartao: Mes[];
  anoCartao: Ano[];
  cpf: string | null | undefined;

  constructor(
    private cadastroService: CadastroService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cliente = new ClienteDto;
    this.obterEstados();
    console.log(this.estados);
    this.mesCartao = [
      { mes: '01', id: 1 },
      { mes: '02', id: 2 },
      { mes: '03', id: 3 },
      { mes: '04', id: 4 },
      { mes: '05', id: 5 },
      { mes: '06', id: 6 },
      { mes: '07', id: 7 },
      { mes: '08', id: 8 },
      { mes: '09', id: 9 },
      { mes: '10', id: 10 },
      { mes: '11', id: 11 },
      { mes: '12', id: 12 }

    ];
    this.anoCartao = [
      { ano: '2022', id: 22 },
      { ano: '2023', id: 23 },
      { ano: '2024', id: 24 },
      { ano: '2025', id: 25 },
      { ano: '2026', id: 26 },
      { ano: '2027', id: 27 },
      { ano: '2028', id: 28 },
      { ano: '2029', id: 29 },
      { ano: '2030', id: 30 },
      { ano: '2031', id: 31 },
      { ano: '2032', id: 32 },
      { ano: '2033', id: 33 }

    ];
  }
  async ngOnInit(): Promise<void> {
    this.cliente = new ClienteDto;
    try {
      let cpf = this.route.snapshot.paramMap.get("cpf");
      if (cpf) {
        this.cliente = this.cadastroService.obterClientePorCpf(cpf);
      }
    } catch (e) {
      this.messageService.add({ severity: 'error', summary: ' ', detail: '' });
    }
  }
  async salvar(form: NgForm) {
    this.messageService.clear;
    if (form.valid) {
      this.cliente.estado = this.estadoSelecionado;
      this.cliente.cidade = this.cidadeSelecionada;
      this.cliente.dataCadastro = new Date();
      this.cadastroService.Salvar(this.cliente);
      this.messageService.add({ severity: 'success', summary: ' ', detail: 'Cliente cadastrado com sucesso.' });
      await new Promise(r => setTimeout(r, 1000));
      try {
        let cpf = this.route.snapshot.paramMap.get("cpf");
        if (cpf) {
          this.router.navigate([" "]);
        } else{
          location.reload();
        }
      } catch (e) {
        this.messageService.add({ severity: 'error', summary: ' ', detail: '' });
      }
      
      
    } else {
      this.messageService.add({ severity: 'error', summary: ' ', detail: 'Preencha todos os campos.' });
    }
  }
  async obterEstados() {
    this.estados = await firstValueFrom(this.cadastroService.obterEstados());
    this.estados = this.estados.sort((e1, e2) => {
      return (e1.nome?? 0) > (e2.nome ?? 0) ? 1 : -1;
    });
  }
  async obterMunicipiosPorId(id: number) {
    this.municipios = await firstValueFrom(this.cadastroService.obterMunicipiosPorId(id));
    this.municipios = this.municipios.sort((m1, m2) => {
      return (m1.nome?? 0) > (m2.nome ?? 0) ? 1 : -1;
    });

  }
  atualizarCidades(event: any) {
    this.obterMunicipiosPorId(this.estadoSelecionado as unknown as number)
  }
}
