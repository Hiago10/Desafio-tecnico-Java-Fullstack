import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projeto-cadastro',
  templateUrl: './projeto-cadastro.component.html',
  styleUrls: ['./projeto-cadastro.component.css']
})
export class ProjetoCadastroComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  id : any;
  projeto :any;
  
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    document.title='Cadastro';
    if(this.id) {
      fetch(`http://localhost:4200/api/projetos/${this.id}`)
    .then(async (response) => {
      const data = await response.json();
      this.projeto = data;
    })  
    }
  }

  adicionar(e: any) {
    const dadosDoForm = new FormData(e.target);
    e.preventDefault();

    const projeto = {
      nome: dadosDoForm.get('nomeInput'),
      descricao: dadosDoForm.get('descricaoInput'),
      valor: dadosDoForm.get('valorInput'),
      data_inicio: dadosDoForm.get('dataIniInput'),
      data_encerramento: dadosDoForm.get('dataFinInput'),
    }

    fetch('http://localhost:4200/api/projetos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projeto)
    })
    .then(async (response) => {
      const dados = await response.json();
      console.log(dados)
    })

    this.router.navigate(['/projetos']);
  }

  editar(e:any) {
    console.log("entrou");
    const dadosDoForm = new FormData(e.target);
    e.preventDefault();

    const projeto = {
      nome: dadosDoForm.get('nomeInput'),
      descricao: dadosDoForm.get('descricaoInput'),
      valor: dadosDoForm.get('valorInput'),
      data_inicio: dadosDoForm.get('dataIniInput'),
      data_encerramento: dadosDoForm.get('dataFinInput'),
    }

    fetch(`http://localhost:4200/api/projetos/${this.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projeto)
    })
    .then(async (response) => {
      const dados = await response.json();
      console.log(dados)
    })

    this.router.navigate(['/projetos']);
  }
  

}
