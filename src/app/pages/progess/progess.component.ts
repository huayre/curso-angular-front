import {Component} from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styleUrls: ['./progess.component.css']
})
export class ProgessComponent {
  progreso1: number = 10;
  progreso2: number = 52;

  get getPorcentaje1() {
    return this.progreso1 + '%';
  }

  get getPorcentaje2() {
    return this.progreso2 + '%';
  }

  public cambioValorHijo2(valor:number) {
    this.progreso2 = valor;
  }

}
