import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBicycle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { ProductosService } from '../productos.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @Output() AccionAvanzar = new EventEmitter();
  @Input() data: any;
  public contador: number;
  portadas: string;
  faMapMarkerAlt = faMapMarkerAlt;
  faBicycle = faBicycle;
  constructor(private productosService: ProductosService) {
    this.portadas = ""
   }

  ngOnInit(): void {
    this.productosService.listarPortadas().subscribe(
      (response: any) => {
        this.portadas = response[0].imagen;

      },
      (error) => {
        console.log(error);
      }
    );
  }
  avanzar(delivery) {
    let data = delivery
    this.AccionAvanzar.emit(data);

  }

}
