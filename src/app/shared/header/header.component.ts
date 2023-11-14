import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Instituto } from '../../interfaces/Instituto.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	buscarLike: string = ''
	mostrar: boolean = false
	instituciones: Instituto[] = []

	constructor(private FireStore: FirestoreService, private _router: Router) { }

	ngOnInit(): void { }

	obtenerInstituciones() {
		if(this.buscarLike === '' || this.buscarLike.length <= 3){
			this.instituciones = []
		}

		if(this.buscarLike.length > 3){
			this.FireStore.obtenerCoincidencias(this.buscarLike.trim()).subscribe((instituciones => this.instituciones = instituciones))
		}
	}

	restablecerBuscador(){
		this.instituciones = []
		this.buscarLike = ''
		this.mostrar = false
	}

	obtenerRutaDetalle(instituto: Instituto) {
		let url: string = ''

		if(instituto.tipoInstituto === 'Universidad'){
			url = `/universidades/${String(instituto.tipoInstituto).toLowerCase()}/${instituto.id}`
		}
		if(instituto.tipoInstituto === 'Preparatoria'){
			// this.restablecerBuscador()
			url = `/preparatorias/${String(instituto.tipoInstituto).toLowerCase()}/${instituto.id}`
		}
		// this.restablecerBuscador()
		if(instituto.tipoInstituto === 'Secundaria'){
			url = `/secundarias/${String(instituto.tipoInstituto).toLowerCase()}/${instituto.id}`
		}

		if(instituto.tipoInstituto === 'Primaria'){
			url = `/primarias/${String(instituto.tipoInstituto).toLowerCase()}/${instituto.id}`
		}

		return url
	}
}
