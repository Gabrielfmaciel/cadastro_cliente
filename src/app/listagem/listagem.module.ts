import { ListagemComponent } from './listagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from '../app-routing.module';
import { CadastroModule } from '../cadastro/cadastro.module';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [ListagemComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    AppRoutingModule,
    CadastroModule,
    MessagesModule,
    MessageModule,
    ToastModule
  ],
  providers: [MessageService],
  exports: [ListagemComponent]
})
export class ListagemModule { }
