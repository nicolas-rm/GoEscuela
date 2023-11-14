import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instituto } from 'src/app/interfaces/Instituto.interface';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
	selector: 'app-universities',
	templateUrl: './universities.component.html',
	styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {

	instituciones: Instituto[] = []
	buscarLike: string = ''

	constructor(private FireStore: FirestoreService, private _router: Router) { }

	/* METODO / FUNCION QUE SE UTILIZA ANTES DEL RENDERIZADO TOTAL DE LA PAGINA */
	ngOnInit(): void {
		this.obtenerInstitucionesCategoria()
	}

	obtenerInstitucionesCategoria() {
		this.FireStore.obteneInstitutoCategoria('Universidad').subscribe((insitituciones => this.instituciones = insitituciones))
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
			this.FireStore.obtenerCoincidenciasCategoria('Universidad', this.buscarLike.trim()).subscribe((instituciones => this.instituciones = instituciones))
		}
	}
}
