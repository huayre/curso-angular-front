import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  ngOnInit() {
    this.btlClassName = 'btn ' + this.btlClassName;
  }

  @Input() progreso: number = 50; // recibir ...comunicación del padre al hijo
  // @Input('valor2')  progreso2: number = 50;
  @Input() btlClassName: string = 'btn-success';

  @Output() valorSalida = new EventEmitter<number>();//emitir ... comunicación de hijo al padre


  get getprogreso() {
    return this.progreso + '%';
  }

  public cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
    if (this.progreso >= 100) {
      this.progreso = 100;
      this.valorSalida.emit(100)
    }
    if (this.progreso <= 0) {
      this.progreso = 0;
      this.valorSalida.emit(0)
    }
  }

  public ngChange(valor: number) {
    if (valor > 100) {
      this.progreso = 100;
    } else if (valor < 0) {
      this.progreso = 0;
    }
    this.progreso = valor;
    this.valorSalida.emit(this.progreso)
  }

}
