import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

/*Otros*/
import { HttpProvider } from '../providers/http/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';


/*Paginas*/
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonalDataPage } from '../pages/personal-data/personal-data';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
import { ModalReferencePage } from '../pages/modal-reference/modal-reference';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { VacantPage } from '../pages/vacant/vacant';
import { UserProfilePage } from '../pages/user-profile/user-profile';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonalDataPage,
    ContactPage,
    ProfilePage,
    ModalReferencePage,
    LoginPage,
    DashboardPage,
    VacantPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonalDataPage,
    ContactPage,
    ProfilePage,
    ModalReferencePage,
    LoginPage,
    DashboardPage,
    VacantPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
