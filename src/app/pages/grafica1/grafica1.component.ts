import {Component} from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {
  public titulo1: string = 'VENTAS';
  public titulo2: string = 'VISITAS';
  public titulo3: string = 'COMPRAS';
  public titulo4: string = 'RANKING';
  public Labels1: string[] = ['PERA', 'UVA', 'PLATANO'];
  public Labels2: string[] = ['CONTACTOS', 'SERIES', 'NOSOTROS'];
  public Labels3: string[] = ['AVENA', 'MANZANA', 'MELON'];
  public Labels4: string[] = ['FUTBOL', 'VOLEY', 'TENIS'];

}
