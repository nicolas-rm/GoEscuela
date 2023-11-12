/* SERVICIO DE CONTROL DE OPERACIONES ASI FIREBASE/FIRESTORE */

import { Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';
import { Instituto } from '../interfaces/Instituto.interface';

@Injectable({
	providedIn: 'root'
})
export class FirestoreService {

	institutoColeccion = '/institutos'

	private institutos!: AngularFirestoreCollection<Instituto>
	private instituto!: AngularFirestoreCollection<Instituto>

	constructor(private FireStore: AngularFirestore) { }

	/* CREAR REGISTRO = CREATE */
	crearInstitucion(document: Instituto) {
		return this.FireStore.collection(this.institutoColeccion).add(document)
	}

	/* OBTENER TODOS LOS REGISTROS = READ */
	obtenerInstituciones() {
		this.institutos = this.FireStore.collection<Instituto>(this.institutoColeccion);
		return this.institutos.snapshotChanges().pipe(map((resp, index) => {
			const institutos: Array<Instituto> = [];

			resp.forEach((document) => {
				const doc = { ...document.payload.doc.data(), id: document.payload.doc.id };
				institutos.push(doc);
			});

			return institutos;
		}))
	}

	/* OBTENER UN SOLO REGISTRO = READ */
	obtenerInstituto(uuid: string) {

		this.instituto = this.FireStore.collection<Instituto>(this.institutoColeccion);
		return this.instituto.doc(uuid).snapshotChanges().pipe(map((document) => {
			const instituto: Instituto = { nombre: '', descripcion: '', tipoInstituto: '', tiempoFinalizacion: '', ofertasEducativas: [] }

			if (document.payload.exists) {
				return { ...document.payload.data(), id: document.payload.id };
			}
			return instituto;
		}))
	}

	/* ACTUALIZAR REGISTRO = UPDATE */
	actulizarInstitucion(document: Instituto) {
		return this.FireStore.collection(this.institutoColeccion).doc(document.id).set(document);
	}

	/* ELIMINAR REGISTRO = DELETE */
	eliminarInstitucion(document: Instituto) {
		return this.FireStore.collection(this.institutoColeccion).doc(document.id).delete();
	}
}


