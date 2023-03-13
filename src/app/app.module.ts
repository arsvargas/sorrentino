import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NossosServicosComponent } from './components/nossos-servicos/nossos-servicos.component';
import { CitacoesComponent } from './components/citacoes/citacoes.component';
import { NossosClientesComponent } from './components/nossos-clientes/nossos-clientes.component';
import { PorVoceComponent } from './components/por-voce/por-voce.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { NossoTimeComponent } from './components/nosso-time/nosso-time.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuemSomosComponent,
    ContatoComponent,
    NossosServicosComponent,
    CitacoesComponent,
    NossosClientesComponent,
    PorVoceComponent,
    FooterComponent,
    MenuPrincipalComponent,
    NossoTimeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
