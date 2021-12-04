import { Component, OnInit } from '@angular/core';
import { faBicycle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public contador: number;
  faMapMarkerAlt = faMapMarkerAlt;
  faBicycle = faBicycle;
  portadas: string;
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

}
