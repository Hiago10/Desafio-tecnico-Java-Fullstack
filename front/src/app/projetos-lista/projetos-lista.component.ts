import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos-lista',
  templateUrl: './projetos-lista.component.html',
  styleUrls: ['./projetos-lista.component.css']
})
export class ProjetosListaComponent implements OnInit {

  constructor(private router: Router) {}
  
  projetos : any = []
  idExclusao : any;
  confirmacao = false;
  datBr : any;

  ngOnInit() {
    document.title='Projetos';
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    fetch('http://localhost:4200/api/projetos')
    .then(async (response) => {
      const data = await response.json();
      this.projetos = data;
    })  
  }

  excluir() {
    this.confirmacao = false;
    fetch(`http://localhost:4200/api/projetos/${this.idExclusao}`, {
      method: 'DELETE'
    })
  .then(async (response) => {
    console.log(response.status);
  })  
  this.router.navigateByUrl('/projetos', {skipLocationChange: true});
  }

}
