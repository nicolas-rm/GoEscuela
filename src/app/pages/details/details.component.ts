import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Instituto } from 'src/app/interfaces/Instituto.interface';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	instituciones!: Instituto[]

	constructor(private FireStore: FirestoreService, private _router: Router, private activeRoute: ActivatedRoute) { }

	ngOnInit(): void {
		const parametros: any = this.obtenerParametros()
		this.obtenerInstituciones()
		// const documento = this.obtenerInstituto(parametros.id)
		console.log(this.instituciones)
		console.log(parametros)
	}

	obtenerParametros() {
		return this.activeRoute.snapshot.params;
	}


	obtenerInstituciones() {
		this.FireStore.obtenerInstituciones().subscribe((insitituciones => this.instituciones = insitituciones))
	}
}
