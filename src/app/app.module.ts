import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* COMPONENTES */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionComponent } from './shared/section/section.component';
import { UniversitiesComponent } from './pages/universities/universities.component';
import { PreparatoryComponent } from './pages/preparatory/preparatory.component';
import { HighSchoolsComponent } from './pages/high-schools/high-schools.component';
import { PrimariesComponent } from './pages/primaries/primaries.component';

/* MODULOS */
import { AppRoutesModule } from './app-routes.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    UniversitiesComponent,
    PreparatoryComponent,
    HighSchoolsComponent,
    PrimariesComponent
  ],
  /* TODOS LOS MODULOS VAN EN IMPORTS */
  imports: [
    BrowserModule,
	AppRoutesModule,
 provideFirebaseApp(() => initializeApp({"projectId":"integrador-uptap","appId":"1:69769056513:web:ebf24b6cd5e40134748b00","storageBucket":"integrador-uptap.appspot.com","apiKey":"AIzaSyBErqBmco0hBSm-OmtcjMfcQKrsgmpLPpQ","authDomain":"integrador-uptap.firebaseapp.com","messagingSenderId":"69769056513","measurementId":"G-N8FXGHRRB9"})),
 provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
