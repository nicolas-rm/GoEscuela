import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

	transform(imagen: string) {

		if(!imagen){
			return
		}

		if (imagen.indexOf('https') >= 0) {
			return imagen;
		}

		return '';
	}

}
