import { Component } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
// import { appIcons } from './icons';

// import home from '@iconify/icons-mdi/home';
// import groupAdd from '@iconify/icons-mdi/group-add';
// import bellSlash from '@iconify/icons-mdi/smart';

// export const appIcons = {
//   home,
//   'group-add': groupAdd
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(iconService: IconService){
  //   iconService.registerAll(appIcons);
  // }
  title = 'GoEscuela';
}
