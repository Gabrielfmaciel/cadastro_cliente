import { ButtonModule } from 'primeng/button';
import { CadastroComponent } from './cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    FormsModule

  ],
  providers: [MessageService],
  exports: [CadastroComponent]
})
export class CadastroModule { }
