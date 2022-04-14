import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule} from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CalendarModule } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';








import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/utilisateur/login/login.component';
import { RegisterComponent } from './components/utilisateur/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfilComponent } from './components/utilisateur/profil/profil.component';
import { UserService } from './service/user.service';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { ListUtilisateursComponent } from './components/utilisateur/list-utilisateurs/list-utilisateurs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
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
import { MatchComponent } from './components/match/match.component';
import { RejoindreComponent } from './components/rejoindre/rejoindre.component';
;



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LayoutComponent,
    ProfilComponent,
    ListUtilisateursComponent,
    ReservationComponent,
    NouvelleReservationElarabiBramsComponent,
    NouvelleReservationFoot5Component,
    NouvelleReservationKickOffComponent,
    NouvelleReservationLeDomeComponent,
    NouvelleReservationMaracanaComponent,
    NouvelleReservationMenaraAcademyComponent,
    NouvelleReservationPalmArenaComponent,
    NouvelleReservationPsgComponent,
    NouvelleReservationUrbain5Component,
    NouvelleReservationVitoriaComponent,
    NouvelleReservation2ElarabiBramsComponent,
    NouvelleReservation2Foot5Component,
    NouvelleReservation2KickOffComponent,
    NouvelleReservation2LeDomeComponent,
    NouvelleReservation2MaracanaComponent,
    NouvelleReservation2MenaraAcademyComponent,
    NouvelleReservation2PalmArenaComponent,
    NouvelleReservation2PsgComponent,
    NouvelleReservation2Urbain5Component,
    NouvelleReservation2VitoriaComponent,
    MatchComponent,
    RejoindreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatCardModule,
    CalendarModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' })
 
   
  ],
  providers: [UserService,AuthGaurdService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('822091703989-vdi2d4a8r3dctfp29rnekf5gop2i01uj.apps.googleusercontent.com'),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('540736383820935')
          }
        ],
      } as SocialAuthServiceConfig,
    },
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
