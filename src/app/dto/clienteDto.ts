export class ClienteDto {
    nome: string | undefined;
    email: string | undefined;
    cpf: string | undefined;
    endereco: string | undefined;
    estado: string | undefined;
    cep: string | undefined;
    cidade: string | undefined;
    formaPagamento: number | undefined;
    cartaoNome: string | undefined;
    cartaoNumero: string | undefined;
    cartaoCodSeguranca: string | undefined;
    cartaoMes: string | undefined;
    cartaoAno: string | undefined;
    dataCadastro: Date | undefined;
}