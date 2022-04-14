import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelleReservationElarabiBramsComponent } from './components/club/nouvelle-reservation-elarabi-brams/nouvelle-reservation-elarabi-brams.component';
import { NouvelleReservationFoot5Component } from './components/club/nouvelle-reservation-foot5/nouvelle-reservation-foot5.component';
import { NouvelleReservationKickOffComponent } from './components/club/nouvelle-reservation-kick-off/nouvelle-reservation-kick-off.component';
import { NouvelleReservationLeDomeComponent } from './components/club/nouvelle-reservation-le-dome/nouvelle-reservation-le-dome.component';
import { NouvelleReservationMaracanaComponent } from './components/club/nouvelle-reservation-maracana/nouvelle-reservation-maracana.component';
import { NouvelleReservationMenaraAcademyComponent } from './components/club/nouvelle-reservation-menara-academy/nouvelle-reservation-menara-academy.component';
import { NouvelleReservationPalmArenaComponent } from './components/club/nouvelle-reservation-palm-arena/nouvelle-reservation-palm-arena.component';
import { NouvelleReservationPsgComponent } from './components/club/nouvelle-reservation-psg/nouvelle-reservation-psg.component';
import { NouvelleReservationUrbain5Component } from './components/club/nouvelle-reservation-urbain5/nouvelle-reservation-urbain5.component';
import { NouvelleReservationVitoriaComponent } from './components/club/nouvelle-reservation-vitoria/nouvelle-reservation-vitoria.component';
import { NouvelleReservation2ElarabiBramsComponent } from './components/club/nouvelle-reservation2-elarabi-brams/nouvelle-reservation2-elarabi-brams.component';
import { NouvelleReservation2Foot5Component } from './components/club/nouvelle-reservation2-foot5/nouvelle-reservation2-foot5.component';
import { NouvelleReservation2KickOffComponent } from './components/club/nouvelle-reservation2-kick-off/nouvelle-reservation2-kick-off.component';
import { NouvelleReservation2LeDomeComponent } from './components/club/nouvelle-reservation2-le-dome/nouvelle-reservation2-le-dome.component';
import { NouvelleReservation2MaracanaComponent } from './components/club/nouvelle-reservation2-maracana/nouvelle-reservation2-maracana.component';
import { NouvelleReservation2MenaraAcademyComponent } from './components/club/nouvelle-reservation2-menara-academy/nouvelle-reservation2-menara-academy.component';
import { NouvelleReservation2PalmArenaComponent } from './components/club/nouvelle-reservation2-palm-arena/nouvelle-reservation2-palm-arena.component';
import { NouvelleReservation2PsgComponent } from './components/club/nouvelle-reservation2-psg/nouvelle-reservation2-psg.component';
import { NouvelleReservation2Urbain5Component } from './components/club/nouvelle-reservation2-urbain5/nouvelle-reservation2-urbain5.component';
import { NouvelleReservation2VitoriaComponent } from './components/club/nouvelle-reservation2-vitoria/nouvelle-reservation2-vitoria.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchComponent } from './components/match/match.component';
import { RejoindreComponent } from './components/rejoindre/rejoindre.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ListUtilisateursComponent } from './components/utilisateur/list-utilisateurs/list-utilisateurs.component';
import { LoginComponent } from './components/utilisateur/login/login.component';
import { ProfilComponent } from './components/utilisateur/profil/profil.component';
import { RegisterComponent } from './components/utilisateur/register/register.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent },
  {path:'profil', component:ProfilComponent},
  {path:'list-utilisateurs', component:ListUtilisateursComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'nouvelle-reservation-elarabibrams', component:NouvelleReservationElarabiBramsComponent},
  {path:'nouvelle-reservation-foot5', component:NouvelleReservationFoot5Component},
  {path:'nouvelle-reservation-kickoff', component:NouvelleReservationKickOffComponent},
  {path:'nouvelle-reservation-ledome', component:NouvelleReservationLeDomeComponent},
  {path:'nouvelle-reservation-maracana', component:NouvelleReservationMaracanaComponent},
  {path:'nouvelle-reservation-menaraAcademy', component:NouvelleReservationMenaraAcademyComponent},
  {path:'nouvelle-reservation-palmarean', component:NouvelleReservationPalmArenaComponent},
  {path:'nouvelle-reservation-psg', component:NouvelleReservationPsgComponent},
  {path:'nouvelle-reservation-urbain5', component:NouvelleReservationUrbain5Component},
  {path:'nouvelle-reservation-vitoria', component:NouvelleReservationVitoriaComponent},

  {path:'nouvelle-reservation2-elarabibrams', component:NouvelleReservation2ElarabiBramsComponent},
  {path:'nouvelle-reservation2-foot5', component:NouvelleReservation2Foot5Component},
  {path:'nouvelle-reservation2-kickoff', component:NouvelleReservation2KickOffComponent},
  {path:'nouvelle-reservation2-ledome', component:NouvelleReservation2LeDomeComponent},
  {path:'nouvelle-reservation2-maracana', component:NouvelleReservation2MaracanaComponent},
  {path:'nouvelle-reservation2-menaraAcademy', component:NouvelleReservation2MenaraAcademyComponent},
  {path:'nouvelle-reservation2-palmarean', component:NouvelleReservation2PalmArenaComponent},
  {path:'nouvelle-reservation2-psg', component:NouvelleReservation2PsgComponent},
  {path:'nouvelle-reservation2-urbain5', component:NouvelleReservation2Urbain5Component},
  {path:'nouvelle-reservation2-vitoria', component:NouvelleReservation2VitoriaComponent},
  {path:'match',component:MatchComponent},
  {path:'rejoindre', component:RejoindreComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
