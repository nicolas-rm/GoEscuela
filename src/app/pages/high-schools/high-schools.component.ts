import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instituto } from 'src/app/interfaces/Instituto.interface';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
	selector: 'app-high-schools',
	templateUrl: './high-schools.component.html',
	styleUrls: ['./high-schools.component.css']
})
export class HighSchoolsComponent implements OnInit {

	buscarLike: string = ''
	instituciones!: Instituto[]

	constructor(private FireStore: FirestoreService, private _router: Router) { }

	/* METODO / FUNCION QUE SE UTILIZA ANTES DEL RENDERIZADO TOTAL DE LA PAGINA */
	ngOnInit(): void {
		this.obtenerInstitucionesCategoria()
	}

	obtenerInstitucionesCategoria() {
		this.FireStore.obteneInstitutoCategoria('Secundaria').subscribe((insitituciones => this.instituciones = insitituciones))
	}
	restablecerBuscador() {
		this.instituciones = []
		this.buscarLike = ''
	}

	obtenerInstituciones() {

		if (this.buscarLike.length === 0 || !this.buscarLike || this.buscarLike === '') {
			this.obtenerInstitucionesCategoria()
			this.restablecerBuscador()
			return
		}

		if (this.buscarLike.length <= 3) {
			this.instituciones = []
			return
		}

		if (this.buscarLike.length > 3) {
			this.FireStore.obtenerCoincidenciasCategoria('Preparatoria', this.buscarLike.trim()).subscribe((instituciones => this.instituciones = instituciones))
		}
	}
}
