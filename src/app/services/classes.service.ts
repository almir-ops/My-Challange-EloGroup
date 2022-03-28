import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClassLead {
  id!: number;
  nome!: string;
  telefone!: string;
  email!: string ;
  status: StatusLista = StatusLista.Client;
}
export enum StatusLista {
  Client = 'Cliente em Potencial',
  Dados = 'Dados Confirmados',
  Agendados = 'Reunião Agendada'
}

