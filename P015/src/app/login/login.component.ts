import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formsCadastro: FormGroup;
  bufferPassWord: string = '';
  constructor(private authService: AuthService, private router: Router) {
    this.formsCadastro = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  login() {
    console.log('Logando...');
    console.log(this.formsCadastro);
  }

  onSubmit() {
    console.log('Logando...');
    var formulario = this.formsCadastro;
    if (!formulario.valid) {
      return;
    }

    const email = formulario.value.email;
    const password = formulario.value.password;

    this.authService.login(email, password).subscribe((responseData) => {
      console.log(responseData);
      this.router.navigate(['']);
    });
  }
}
