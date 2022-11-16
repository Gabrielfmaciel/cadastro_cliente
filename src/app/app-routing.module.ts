import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/:cpf', component: CadastroComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: '**', redirectTo: '/cadastro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
