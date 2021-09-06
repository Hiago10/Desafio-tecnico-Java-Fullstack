import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetoCadastroComponent } from './projeto-cadastro/projeto-cadastro.component';
import { ProjetosListaComponent } from './projetos-lista/projetos-lista.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projetos', component: ProjetosListaComponent },
  { path: 'projetos/novo', component: ProjetoCadastroComponent },
  { path: 'projetos/:id', component: ProjetoCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
