import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/* INTERFACE O TIPADO  */
import { Instituto } from '../../interfaces/Instituto.interface'
/* SERVICIO DE CONEXIONES (CRUD) FIREBASE/FIRESTORE */
import { FirestoreService } from 'src/app/services/firestore.service';
import { SWAL_CREATE, SWAL_ERROR } from 'src/app/messages/sweetAlert';

// import Swal from 'sweetalert2';
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
		ofertasEducativas: [],
		tipoInstituto: ''
	}

	oferta: string = ''
	validacionCompleta: Boolean = true

	ngOnInit(): void {

	}

	constructor(private FireStore: FirestoreService, private _router: Router) { }

	/* Agregar una oferta */
	controlAgregarOfertaEducativa() {
		if (this.oferta) {
			this.instituto.ofertasEducativas = [...this.instituto.ofertasEducativas, this.oferta]
			this.oferta = ''
		}
	}

	/* Eliminar una oferta */
	controlEliminarOfertaEducativa(posicion: number) {
		this.instituto.ofertasEducativas = this.instituto.ofertasEducativas.filter((inst, index) => index !== posicion)
		this.oferta = ''
	}

	validacionEspacios() {
		const instituloBackup: any = this.instituto

		if(this.instituto.ofertasEducativas.length <= 0){
			SWAL_ERROR(`Institulo debe tener almenos una oferta educativa.`, 1700)
			return false
		}

		if(this.instituto.ofertasEducativas.length > 0){
			const validacion = Object.keys(this.instituto).map(propiedad => instituloBackup[propiedad].length <= 0).includes(true)
			if(validacion){
				SWAL_ERROR(`Verificar los campos, Algunos son requeridos.`, 1700)
				return false
			}
		}

		return true

	}

	/* Crear un regitro nuevo de institucion */
	async crearInstitucionCompleta() {
		const validacion = this.validacionEspacios()

		if(validacion){
			this.validacionCompleta = false
			const resultado = await this.FireStore.crearInstitucion(this.instituto)
			if(resultado){
				SWAL_CREATE(`Institucion creada Correctamente`)
				this.validacionCompleta = true
			}
		}
	}

}
