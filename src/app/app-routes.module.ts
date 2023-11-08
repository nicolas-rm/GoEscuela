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

/* ARREGLO Y CONFIGURACION DE LAS RUTAS */
const routes: Routes = [
	/* RUTA PRINCIPAL O DE BASE */
	{ path: 'inicio', component: DashboardComponent },
	/* RUTAS ESPECIFICAS */
	{ path: 'universidades', component: UniversitiesComponent },
	{ path: 'preparatorias', component: PreparatoryComponent },
	{ path: 'secundarias', component: HighSchoolsComponent },
	{ path: 'primarias', component: PrimariesComponent },
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
