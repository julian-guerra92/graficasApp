import { Component } from '@angular/core';

interface MenuItem {
  path: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent {

  menu: MenuItem[] = [
    { path: '/graficas/barra', text: 'Barras' },
    { path: '/graficas/barra-doble', text: 'Barras Dobles' },
    { path: '/graficas/dona', text: 'Dona' },
    { path: '/graficas/dona-http', text: 'Dona http' }
  ]

}
