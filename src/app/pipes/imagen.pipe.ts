import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

	transform(imagen: any, referencia?: string) {

		if (imagen.indexOf('https') >= 0) {
			return imagen;
		}

		if (referencia === 'logo') {
			if (!imagen) {
				return '../../assets/images/birrete.png'
			}
			if (imagen) {
				return imagen
			}
		}

		return imagen

	}

}
