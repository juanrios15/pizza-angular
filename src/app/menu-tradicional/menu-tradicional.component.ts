import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowAltCircleLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-menu-tradicional',
  templateUrl: './menu-tradicional.component.html',
  styleUrls: ['./menu-tradicional.component.css']
})
export class MenuTradicionalComponent implements OnInit {
  @Output() AccionAtras = new EventEmitter();
  @Output() AvanzarResumen = new EventEmitter();
  @Output() SegundaMitad = new EventEmitter();

  faArrowLeft = faArrowLeft
  faArrowAltCircleLeft = faArrowAltCircleLeft
  public menu_tradicional: Array<any>;
  public mitadDiferente: boolean;
  public segundo_menu: boolean;
  constructor(private productosService: ProductosService) {
    this.segundo_menu = false
  }

  ngOnInit(): void {
  }
  atras() {
    this.AccionAtras.emit()
  }
  cargar(mitad_diferente) {
    this.productosService.listarMenuTradicional().subscribe(
      (response: any) => {
        this.menu_tradicional = response
        console.log(this.menu_tradicional);
        console.log("mitad Diferente?", mitad_diferente);
        this.mitadDiferente = mitad_diferente


      },
      (error) => {
        console.log(error);
      }
    );
  }
  seleccionarPizza(item) {
    console.log(item);
    console.log(this.mitadDiferente);
    if (this.mitadDiferente && this.segundo_menu == false) {
      this.SegundaMitad.emit(item)
    } else {
      this.AvanzarResumen.emit(item)
    }
  }
  menuSegundaMitad() {
    this.segundo_menu = true
  }
}
