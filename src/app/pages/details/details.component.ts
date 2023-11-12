import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { Instituto } from 'src/app/interfaces/Instituto.interface';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	instituto!: Instituto
	instituciones!: Instituto[]

	constructor(private FireStore: FirestoreService, private _router: Router, private activeRoute: ActivatedRoute) {}

	ngOnInit(): void {
		const parametros: any = this.obtenerParametros()
		this.obtenerInstituto(parametros.id)
	}

	obtenerParametros() {
		return this.activeRoute.snapshot.params;
	}


	obtenerInstituto(uuid: string) {
		this.FireStore.obtenerInstituto(uuid).subscribe(instituto => this.instituto = instituto)
	}
}
