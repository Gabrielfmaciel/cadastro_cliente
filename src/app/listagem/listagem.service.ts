import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDto } from '../dto/clienteDto';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  constructor(private http: HttpClient) { }

  public obterCliente(): Array<ClienteDto> {
    let clientes: ClienteDto[] = [];
    console.log(localStorage.length)
    for (let i = 0; i < localStorage.length; i++) {
      clientes.push(
        JSON.parse(
          localStorage.getItem(
            localStorage.key(i)!
          )!
        )
      );
    }
    return clientes;
  }

  public excluirPorCpf(cpf: string): Observable<ClienteDto> {
    return JSON.parse(localStorage.removeItem(cpf)!);
  }
}
