import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPig, IUser, IWeights } from '../model/usuario.model';
import { AuthService } from './auth.service';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  cadastrar(dadosUsuario: IUser) {
    console.log(dadosUsuario);
    return this.http
      .post(
        'https://residencia-tic-default-rtdb.firebaseio.com/users.json',
        dadosUsuario
      )
      .subscribe(
        (response) => {
          console.log('Resposta da solicitação:', response);
        },
        (error) => {
          console.error('Erro na solicitação:', error);
        }
      );
  }

  listarUsuarios() {
    return this.http
      .get<any>('https://residencia-tic-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((data) => {
          return {
            name: data.name,
            nameFarm: data.nameFarm,
            email: data.email,
            Piggers: data.Piggers,
          } as IUser;
        })
      );
  }

  criptografar(senha: string) {}

  addCadastroSuino(cadastro: IPig) {
    const userData = localStorage.getItem('userData');

    console.log(userData);

    if (userData) {
      const user = JSON.parse(userData);
      console.log(user);
      return this.http
        .post(
          `https://residencia-tic-default-rtdb.firebaseio.com/users/${user.id}.json`,
          cadastro
        )
        .subscribe(
          (response) => {
            console.log('Resposta da solicitação:', response);
          },
          (error) => {
            console.error('Erro na solicitação:', error);
          }
        );
    }

    return console.log('Usuário não autenticado');
  }

  addPesoSuino(pigId: string, newWeight: IWeights) {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);

      return this.http
        .post(
          `https://residencia-tic-default-rtdb.firebaseio.com/users/${user.id}/pigs/${pigId}/weights.json`,
          newWeight
        )
        .subscribe(
          (response) => {
            console.log('Peso adicionado com sucesso:', response);
          },
          (error) => {
            console.error('Erro ao adicionar peso:', error);
          }
        );
    }

    return console.log('Usuário não autenticado');
  }

  listarSuinos() {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http
        .get<IPig>(
          `https://residencia-tic-default-rtdb.firebaseio.com/users/${user.id}.json`
        )
        .pipe(
          map((responseData) => {
            return {
              dateOfBirth: responseData.dateOfBirth,
              dateOfDeparture: responseData.dateOfDeparture,
              fatherEarTag: responseData.fatherEarTag,
              gender: responseData.gender,
              motherEarTag: responseData.motherEarTag,
              status: responseData.status,
              weights: responseData.weights,
            };
          })
        );
    }

    console.log('Usuário não autenticado');
    return of(null);
  }

  listarPesosSuino(pigId: string) {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http
        .get<IWeights>(
          `https://residencia-tic-default-rtdb.firebaseio.com/users/${user.id}/pigs/${pigId}/weights.json`
        )
        .pipe(
          map((responseData) => {
            return {
              date: responseData.date,
              weight: responseData.weight,
            };
          })
        );
    }

    return console.log('Usuário não autenticado');
  }
}
