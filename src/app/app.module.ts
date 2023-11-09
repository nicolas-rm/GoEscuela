import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* COMPONENTES */
import { AppComponent } from './app.component';

/* MODULOS */
import { AppRoutesModule } from './app-routes.module';

/* MODULOS PARA INICIALIZAR FIREBASE */
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
	/* TODOS LOS MODULOS VAN EN IMPORTS */
	imports: [
		BrowserModule,
		AppRoutesModule,
		/* IMPORTACION DEL MODULO DE SHARED */
		SharedModule,
		/* IMPORTACION DEL MODULO DE PAGINAS */
		PagesModule,
		provideFirebaseApp(() => initializeApp(environment.FireBaseKey)),
		provideFirestore(() => getFirestore())
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
