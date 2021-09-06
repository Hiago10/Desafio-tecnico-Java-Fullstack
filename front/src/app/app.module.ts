import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjetoCadastroComponent } from './projeto-cadastro/projeto-cadastro.component';
import { ProjetosListaComponent } from './projetos-lista/projetos-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetoCadastroComponent,
    ProjetosListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
