import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menusSidebar: any[] = [
    {
      titulo: "Dashboard",
      icono: "mdi mdi-gauge",
      submenus: [
        {
          titulo: 'Principal', url: '/'
        },
        {
          titulo: 'ProgressBar', url: 'progress'
        },
        {
          titulo: 'Gráficas', url: 'grafica1'
        },
      ]
    },
  ];

  constructor() {
  }
}
