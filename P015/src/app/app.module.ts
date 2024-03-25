import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutenticaInterceptor } from './service/autentica.interceptor';
import { GraficoComponent } from './grafico/grafico.component';
import { MatIconModule } from '@angular/material/icon';
import { HistoricoPesoComponent } from './historico-peso/historico-peso.component';
@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    CadastroSuinoComponent,
    DashboardComponent,
    GraficoComponent,
    HistoricoPesoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
