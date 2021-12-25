import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductosService } from '../productos.service'
import { faAngleLeft, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tamanos',
  templateUrl: './tamanos.component.html',
  styleUrls: ['./tamanos.component.css']
})
export class TamanosComponent implements OnInit {
  @Output() AccionAtras = new EventEmitter();
  @Output() AccionAvanzar = new EventEmitter();
  public tamanos: Array<any>;
  public idChecked: number;
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faArrowAltCircleRight = faArrowAltCircleRight;
  faAngleLeft = faAngleLeft;
  faArrowLeft = faArrowLeft;

  constructor(private productosService: ProductosService) {

   }

  ngOnInit(): void {
    this.productosService.listarTamanos().subscribe(
      (response: any) => {
        this.tamanos = response
        console.log(response);

      },
      (error) => {
        console.log(error);
      }
    );
  }
  avanzarMenu(item) {
    this.idChecked = item.id
    this.AccionAvanzar.emit(item);

  }
  atras() {
    this.AccionAtras.emit()
  }

}
