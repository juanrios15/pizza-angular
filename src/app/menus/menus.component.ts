import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowAltCircleLeft, faArrowLeft, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  @Output() AccionAtras = new EventEmitter();
  @Output() AccionAvanzarArma = new EventEmitter();
  @Output() AccionAvanzarTrad = new EventEmitter();

  faArrowLeft = faArrowLeft;
  faPizzaSlice = faPizzaSlice;
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  public mitadDiferente: boolean;

  constructor() {
    this.mitadDiferente = false
   }

  ngOnInit(): void {
  }
  atras() {
    this.AccionAtras.emit()
  }

  avanzarArmaPizza(mitad) {

    this.AccionAvanzarArma.emit(mitad)
  }
  avanzarMenuTradicional(mitad) {
    this.AccionAvanzarTrad.emit(mitad)
  }

}
