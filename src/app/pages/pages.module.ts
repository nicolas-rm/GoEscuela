import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here and other directives ng

/* COMPONENTES */
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UniversitiesComponent } from '../pages/universities/universities.component';
import { PreparatoryComponent } from '../pages/preparatory/preparatory.component';
import { HighSchoolsComponent } from '../pages/high-schools/high-schools.component';
import { PrimariesComponent } from '../pages/primaries/primaries.component';
import { AppRoutesModule } from '../app-routes.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
		PageNotFoundComponent,
        DashboardComponent,
        UniversitiesComponent,
        PreparatoryComponent,
        HighSchoolsComponent,
        PrimariesComponent,
        RegisterComponent,
    ],
    exports: [
        BreadcrumbsComponent,
		PageNotFoundComponent,
        DashboardComponent,
        UniversitiesComponent,
        PreparatoryComponent,
        HighSchoolsComponent,
        PrimariesComponent,
    ],
    imports: [
        CommonModule,
		AppRoutesModule,
		FormsModule
    ]
})
export class PagesModule { }
