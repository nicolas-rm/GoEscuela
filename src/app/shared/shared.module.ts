import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* COMPONENTES */
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AppRoutesModule } from '../app-routes.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [
		SidebarComponent,
		HeaderComponent,
		FooterComponent,
  		NavbarComponent
	],
	exports: [
		SidebarComponent,
		HeaderComponent,
		FooterComponent,
		NavbarComponent
	],
	imports: [
		CommonModule,
		AppRoutesModule
	]
})
export class SharedModule { }
