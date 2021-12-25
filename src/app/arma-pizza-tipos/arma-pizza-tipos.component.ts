import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductosService } from '../productos.service';
import { faArrowAltCircleLeft, faArrowLeft, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-arma-pizza-tipos',
  templateUrl: './arma-pizza-tipos.component.html',
  styleUrls: ['./arma-pizza-tipos.component.css']
})
export class ArmaPizzaTiposComponent implements OnInit {
  @Output() AccionAtras = new EventEmitter();
  @Output() AvanzarResumen = new EventEmitter();
  @Output() SegundaMitad = new EventEmitter();
  public tiposIngredientes: Array<any>;
  public tiposSeleccionados: Array<any>;
  public Ingredientes: Array<any>;
  public IngredientesSeleccionados: Array<any>;
  public mitadDiferente: boolean;
  public segundo_menu: boolean;
  faArrowLeft = faArrowLeft;
  faPizzaSlice = faPizzaSlice;
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  constructor(private productosService: ProductosService) {
    this.IngredientesSeleccionados = []
    this.tiposSeleccionados = []
    this.segundo_menu = false
   }

  ngOnInit(): void {
  }

  cargar(mitad_diferente){
    this.mitadDiferente = mitad_diferente
    this.productosService.listarTipoIngrendientes().subscribe(
      (response: any) => {
        console.log(response);
        this.tiposIngredientes = response
        this.tiposIngredientes.forEach(element => {
          element.checked = false
        });
      },
      (error) => {
        console.log(error);
      }
    );

    this.productosService.listarIngredientes().subscribe(
      (response: any) => {
        this.Ingredientes = response
        this.Ingredientes.forEach(element => {
          element.checked = false
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  atras() {
    this.AccionAtras.emit()
  }

  filtroTipo(val) {
    val.checked = !val.checked
    if (val.checked){
      this.tiposSeleccionados.push(val.id)
      console.log(this.tiposSeleccionados);

    }
    else {
      for (let index = 0; index < this.tiposSeleccionados.length; index++) {
        if (this.tiposSeleccionados[index] == val.id) {
          this.tiposSeleccionados.splice(index,1)
          console.log(this.tiposSeleccionados);

        }
      }
    }
    this.productosService.listarIngredientesPorTipo(this.tiposSeleccionados).subscribe(
      (response: any) => {
        this.Ingredientes = response
        console.log("lista", this.Ingredientes);
        console.log("selccionados", this.IngredientesSeleccionados);

        this.Ingredientes.forEach(element => {
          const resultado = this.IngredientesSeleccionados.find( ingre => ingre.id === element.id )
          if (resultado) {
            element.checked = true
          } else {
            element.checked = false
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  seleccionar(item) {
    item.checked = !item.checked
    if (item.checked){
      this.IngredientesSeleccionados.push(item)
    }
    else {
      for (let index = 0; index < this.IngredientesSeleccionados.length; index++) {
        if (this.IngredientesSeleccionados[index].id == item.id) {
          this.IngredientesSeleccionados.splice(index,1)
        }
      }
    }
    console.log(this.IngredientesSeleccionados);

  }

  avanzar() {
    if (this.mitadDiferente && this.segundo_menu == false) {
      this.SegundaMitad.emit(this.IngredientesSeleccionados)
    } else {
      this.AvanzarResumen.emit(this.IngredientesSeleccionados)
    }
  }
  menuSegundaMitad() {
    this.segundo_menu = true
    this.cargar(this.mitadDiferente)
    this.IngredientesSeleccionados = []
  }

}
