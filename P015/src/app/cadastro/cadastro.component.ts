import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../service/storage.service';
import { AuthService } from '../service/auth.service';
import { IUser } from '../model/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent implements OnInit {
  formsCadastro: FormGroup;
  bufferPassWord: string = '';
  openAlert: boolean = false;
  userFormat : IUser = {} as IUser;
  constructor(
    private service: StorageService,
    private authService: AuthService
  ) {
    this.formsCadastro = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\p{L}+(\s+\p{L}+)+$/u),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
      nameFarm: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formsCadastro.valid) {
      var login = this.formsCadastro.value.email;
      var senha = this.formsCadastro.value.password;
      this.userFormat.name = this.formsCadastro.value.name;
      this.userFormat.email = this.formsCadastro.value.email;
      this.userFormat.nameFarm = this.formsCadastro.value.nameFarm;
     
      this.service.cadastrar(this.userFormat);

      this.authService.signUp(login, senha).subscribe((responseData) => {});

       this.formsCadastro.reset();
    } else {
      this.openAlert = true;
    }
  }

  cadastrar() {
    console.log('Cadastrando...');
    console.log(this.formsCadastro);
  }
  comparePassword(pass: any): void {
    const confirmPasswordControl =
      this.formsCadastro.controls['confirmPassword'];

    if (pass.target.value === this.bufferPassWord) {
      confirmPasswordControl.setErrors(null);
    } else {
      confirmPasswordControl.setErrors({ notSame: true });
    }
  }
  bufferPass(pass: any) {
    this.bufferPassWord = pass.target.value;
  }
}
