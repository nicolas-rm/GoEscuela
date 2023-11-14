import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/* INTERFACE O TIPADO  */
import { Instituto } from '../../interfaces/Instituto.interface'
/* SERVICIO DE CONEXIONES (CRUD) FIREBASE/FIRESTORE */
import { FirestoreService } from 'src/app/services/firestore.service';
import { SWAL_CONFIRMATION, SWAL_CREATE, SWAL_ERROR, SWAL_UPDATE } from 'src/app/messages/sweetAlert';
import { Location } from '@angular/common';

// import Swal from 'sweetalert2';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	/* IMPLETEMENTACION DE Two-way binding */

	instituto: Instituto = {
		vistas: 0,
		nombre: '',
		tiempoFinalizacion: '',
		descripcion: '',
		ofertasEducativas: [],
		tipoInstituto: ''
	}

	oferta: string = ''
	titulo: string = 'Registro Informacion'
	parametros: Boolean = false
	validacionCompleta: Boolean = true

	constructor(private FireStore: FirestoreService, private _router: Router, private activeRoute: ActivatedRoute, private location: Location) { }

	ngOnInit(): void {
		/* SE OBTIENEN LOS PARAMETROS EN DADO CASO QUE VENGA ALGUNO / (SI VIENE ES ACTUALIZAR) */
		const parametros: any = this.obtenerParametros()
		if (parametros.id) {
			this.titulo = 'Actualizacion Informacion'
			this.obtenerInstituto(parametros.id)
			this.parametros = true
		} else {
			this.titulo = 'Registro Informacion'
			this.parametros = false
		}
	}

	obtenerParametros() {
		return this.activeRoute.snapshot.params;
	}

	obtenerInstituto(uuid: string) {
		this.FireStore.obtenerInstituto(uuid).subscribe(instituto => this.instituto = instituto)
	}
	/* RESTABLECER LOS CAMPOS POR VALOR DEFAULT */
	restablecerCampos() {
		this.instituto = {
			vistas: 0,
			nombre: '',
			tiempoFinalizacion: '',
			descripcion: '',
			ofertasEducativas: [],
			tipoInstituto: ''
		}
	}

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

		if (this.instituto.ofertasEducativas.length <= 0) {
			SWAL_ERROR(`Institulo debe tener al menos una oferta educativa.`, 1700)
			return false
		}

		if (this.instituto.ofertasEducativas.length > 0) {
			const validacion = Object.keys(this.instituto).map(propiedad => instituloBackup[propiedad].length <= 0).includes(true)
			if (validacion) {
				SWAL_ERROR(`Verificar los campos, Algunos son requeridos.`, 1700)
				return false
			}
		}

		return true

	}

	/* Crear un regitro nuevo de institucion */
	async crearInstitucionCompleta() {
		const validacion = this.validacionEspacios()

		/* VALIDA SI LOS CAMPOS REQUERIDOS SON COMPLETADOS */
		if (validacion) {

			/* INHABILITA EL BOTON DE REGISTRO PARA QUE NO SE PRECIONE MUCHAS VECES */
			this.validacionCompleta = false

			/* TRY - CATCH : SIRVE PARA CAPTURAR ERRORES, TRY: SUCEDE ESTO, CATCH: SI NO SUCEDE ESTO */
			try {
				/* SE ENVIA A FIREBASE */
				const resultado = await this.FireStore.crearInstitucion(this.instituto)

				/* SI EL RESULTADO ES CORRECTO MOSTRARA UN MENSAJE VALIDO */
				if (resultado) {
					this.validacionCompleta = true
					this.restablecerCampos()
					SWAL_CREATE(`Institucion creada Correctamente`)
				}else {
					this.validacionCompleta = true
				}
			} catch (error) {
				this.validacionCompleta = true
				SWAL_ERROR('Algo Salio Mal, Institucion No Creada.', 1700)
			}

		}
	}

	/* Actualizar un regitro de institucion */
	async actualizarInstitucionCompleta() {
		const validacion = this.validacionEspacios()

		/* VALIDA SI LOS CAMPOS REQUERIDOS SON COMPLETADOS */
		if (validacion) {

			/* INHABILITA EL BOTON DE REGISTRO PARA QUE NO SE PRECIONE MUCHAS VECES */
			this.validacionCompleta = false

			/* TRY - CATCH : SIRVE PARA CAPTURAR ERRORES, TRY: SUCEDE ESTO, CATCH: SI NO SUCEDE ESTO */
			try {
				/* SE ENVIA A FIREBASE */
				const resultado = await this.FireStore.actulizarInstitucion(this.instituto)

				/* SI EL RESULTADO ES CORRECTO MOSTRARA UN MENSAJE VALIDO */
				if (resultado) {
					this.validacionCompleta = true
					this.location.back()
					SWAL_UPDATE(`Institucion Actualizada Correctamente.`)
				}else {
					this.validacionCompleta = true
				}
			} catch (error) {
				this.validacionCompleta = true
				SWAL_ERROR('Algo Salio Mal, Institucion No Actualizada.', 1700)
			}

		}
	}

	/* Eliminar un regitro de institucion */
	async eliminarInstitucionCompleta() {
		const validacion = this.validacionEspacios()

		/* VALIDA SI LOS CAMPOS REQUERIDOS SON COMPLETADOS */
		if (validacion) {

			/* INHABILITA EL BOTON DE REGISTRO PARA QUE NO SE PRECIONE MUCHAS VECES */
			this.validacionCompleta = false

			/* TRY - CATCH : SIRVE PARA CAPTURAR ERRORES, TRY: SUCEDE ESTO, CATCH: SI NO SUCEDE ESTO */
			try {

				/* SI EL RESULTADO ES CORRECTO MOSTRARA UN MENSAJE VALIDO */
				const confirmacion = await SWAL_CONFIRMATION('La', 'Institucion', this?.instituto?.nombre || this?.instituto?.id)
				if (confirmacion) {
					const resultado = await this.FireStore.eliminarInstitucion(this.instituto)
					if(resultado){
						this.validacionCompleta = true
						this.restablecerCampos()
						this._router.navigate(['/registro'])
					}
				}else {
					this.validacionCompleta = true
				}

			} catch (error) {
				this.validacionCompleta = true
				SWAL_ERROR('Algo Salio Mal, Institucion No Actualizada.', 1700)
			}

		}
	}

	cancelar(){
		this.location.back()
	}
}
