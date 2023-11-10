import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* COMPONENTES */
import { AppComponent } from './app.component';

/* MODULOS */
import { AppRoutesModule } from './app-routes.module';

/* MODULOS PARA INICIALIZAR FIREBASE */
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

/* CREDENCIALES DE FIREBASE */
import { environment } from '../environments/environment.development';

/* MODULO DE PAGINAS */
import { PagesModule } from './pages/pages.module';
/* MODULO DE SHARED */
import { SharedModule } from './shared/shared.module';


@NgModule({
	declarations: [
		AppComponent
	],
	/* LOS MODULOS VAN EN IMPORTS */
	imports: [
		BrowserModule,
		AppRoutesModule,
		/* IMPORTACION DEL MODULO DE SHARED */
		SharedModule,
		/* IMPORTACION DEL MODULO DE PAGINAS */
		PagesModule,
		/* MODULOS E IMPORTACIONES PARA FIREBASE/FIRESTORE */
		AngularFireModule.initializeApp(environment.FireBaseKey),
		provideFirestore(() => getFirestore()),
		AngularFirestoreModule,
		AngularFireModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
