import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* IMPORTACIONES PARA HACER FUNCIONAR LAS RUTAS */
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UniversitiesComponent } from './pages/universities/universities.component';
import { PreparatoryComponent } from './pages/preparatory/preparatory.component';
import { HighSchoolsComponent } from './pages/high-schools/high-schools.component';
import { PrimariesComponent } from './pages/primaries/primaries.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { DetailsComponent } from './pages/details/details.component';

/* ARREGLO Y CONFIGURACION DE LAS RUTAS */
const routes: Routes = [
	/* RUTA PRINCIPAL O DE BASE */
	{ path: 'inicio', component: DashboardComponent },
	/* RUTAS ESPECIFICAS */
	{ path: 'universidades', component: UniversitiesComponent },
	{ path: 'universidades/universidad/:id', component: DetailsComponent },

	{ path: 'preparatorias', component: PreparatoryComponent },
	{ path: 'preparatorias/preparatoria/:id', component: DetailsComponent },

	{ path: 'secundarias', component: HighSchoolsComponent },
	{ path: 'secundarias/secundaria/:id', component: DetailsComponent },

	{ path: 'primarias', component: PrimariesComponent },
	{ path: 'primarias/primaria/:id', component: DetailsComponent },

	{ path: 'registro', component: RegisterComponent },
	/* RUTA QUE NO EXISTE */
	{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
	/* CUALQUIER OTRA RUTA QUE NO EXISTA */
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		/* IMPORTACION PARA LAS RUTAS PRINCIPALES */
		RouterModule.forRoot(routes)
	],
	/* IMPORTACION DEL MODULO PARA QUE PUEDA FUNCIONAR EN CUALQUIER LADO */
	exports: [RouterModule],
})
export class AppRoutesModule { }
