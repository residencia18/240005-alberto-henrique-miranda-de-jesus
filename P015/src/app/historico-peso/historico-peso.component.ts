import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-historico-peso',
  templateUrl: './historico-peso.component.html',
  styleUrl: './historico-peso.component.css',
})
export class HistoricoPesoComponent {
  //service banco
  tagsPorcos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  cadastroForm = new FormGroup({
    brincoAnimal: new FormControl('', [
      Validators.required
    ]),
    peso: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    data: new FormControl('', Validators.required)
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.cadastroForm.value);
    //service
    /* Aqui precisa ta o codigo para salvar isso no banco, já linkando ao user */
  }
}
