import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* COMPONENTES */
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AppRoutesModule } from '../app-routes.module';

@NgModule({
	declarations: [
		SidebarComponent,
		HeaderComponent,
		FooterComponent
	],
	exports: [
		SidebarComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		AppRoutesModule
	]
})
export class SharedModule { }
