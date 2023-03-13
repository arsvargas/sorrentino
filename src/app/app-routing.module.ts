import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitacoesComponent } from './components/citacoes/citacoes.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { NossoTimeComponent } from './components/nosso-time/nosso-time.component';
import { NossosClientesComponent } from './components/nossos-clientes/nossos-clientes.component';
import { PorVoceComponent } from './components/por-voce/por-voce.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'citacoes', component: CitacoesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'nosso-time', component: NossoTimeComponent },
  { path: 'nossos-clientes', component: NossosClientesComponent },
  { path: 'por-voce', component: PorVoceComponent },











  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
