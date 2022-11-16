import { Municipios } from './../dto/municipios';
import { Estado } from './../dto/estado';
import { ClienteDto } from './../dto/clienteDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  public Salvar(cliente: ClienteDto) {
    localStorage.setItem(cliente.cpf!.toString(), JSON.stringify(cliente));
  }
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
  public obterEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }

  public obterMunicipiosPorId(id: number): Observable<Municipios[]> {
    return this.http.get<Municipios[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/distritos`);
  }

  public obterClientePorCpf(cpf: string): ClienteDto {
    return JSON.parse(localStorage.getItem(cpf)!);
  }
}
