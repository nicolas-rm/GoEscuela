import { Component, OnInit } from '@angular/core';
import { Instituto } from '../../interfaces/Instituto.interface'
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	/* IMPLETEMENTACION DE Two-way binding */

	instituto: Instituto = {
		nombre: '',
		tiempoFinalizacion: '',
		descripcion: '',
		ofertasEducativas: []
	}

	oferta: string = ''

	ngOnInit(): void {

	}

	/* Agregar una oferta */
	controlAgregarOfertaEducativa() {
		this.instituto.ofertasEducativas = [...this.instituto.ofertasEducativas, this.oferta]
		this.oferta = ''
	}

	/* Eliminar una oferta */
	controlEliminarOfertaEducativa(posicion: number) {
		this.instituto.ofertasEducativas = this.instituto.ofertasEducativas.filter((inst, index) => index !== posicion)
		this.oferta = ''
	}

}
