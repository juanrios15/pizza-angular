import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowLeft, faDolly } from '@fortawesome/free-solid-svg-icons';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-otros-productos',
  templateUrl: './otros-productos.component.html',
  styleUrls: ['./otros-productos.component.css']
})
export class OtrosProductosComponent implements OnInit {
  @Output() AccionAtras = new EventEmitter();
  @Output() AvanzarOtros = new EventEmitter();
  faArrowLeft = faArrowLeft
  faDolly = faDolly
  public otrosProductos: Array<any>;
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
  }
  cargar(event) {
    this.productosService.listarOtrosProductos().subscribe(
      (response: any) => {
        console.log(response);
        this.otrosProductos = response

      },
      (error) => {
        console.log(error);
      }
    );
  }
  atras() {
    this.AccionAtras.emit()
  }
  agregarOtroProducto(item) {
    item.cantidad = 1
    this.AvanzarOtros.emit(item)

  }
}
