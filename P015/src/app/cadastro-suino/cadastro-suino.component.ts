import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../service/storage.service';
import { IPig } from '../model/usuario.model';

@Component({
  selector: 'app-cadastro-suino',
  templateUrl: './cadastro-suino.component.html',
  styleUrls: ['./cadastro-suino.component.css'],
})
export class CadastroSuinoComponent implements OnInit {
  cadastroForm = new FormGroup({
    brincoAnimal: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    brincoPai: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    brincoMae: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    dataNascimento: new FormControl('', Validators.required),
    dataSaida: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
  });

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue = this.cadastroForm.value;
    const cadastro: IPig = {
      fatherEarTag: formValue.brincoPai || '',
      motherEarTag: formValue.brincoMae || '',
      dateOfBirth: formValue.dataNascimento || '',
      dateOfDeparture: formValue.dataSaida || '',
      gender:
        formValue.sexo === 'M' || formValue.sexo === 'F' ? formValue.sexo : 'M',
      status: formValue.status || '',
    };
    this.storageService.addCadastroSuino(cadastro);
  }
}
