import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instituto } from 'src/app/interfaces/Instituto.interface';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	instituciones!: Instituto[]

	constructor(private FireStore: FirestoreService, private _router: Router) { }

	/* METODO / FUNCION QUE SE UTILIZA ANTES DEL RENDERIZADO TOTAL DE LA PAGINA */
	ngOnInit(): void {
		this.obtenerInstituciones()
	}

	obtenerInstituciones() {
		this.FireStore.obtenerInstituciones().subscribe((insitituciones => this.instituciones = insitituciones))
	}


}
