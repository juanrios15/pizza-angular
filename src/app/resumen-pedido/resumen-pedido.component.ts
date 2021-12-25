import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAngleDown, faAngleUp, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resumen-pedido',
  templateUrl: './resumen-pedido.component.html',
  styleUrls: ['./resumen-pedido.component.css']
})
export class ResumenPedidoComponent implements OnInit {
  @Output() AvanzarOtrosProductos = new EventEmitter();
  @Output() AgregarOtraPizza = new EventEmitter();
  @Output() FinalizarPedido = new EventEmitter();
  faArrowLeft = faArrowLeft
  faAngleDown = faAngleDown
  faAngleUp = faAngleUp
  @Input() data: any;
  public subtotal_pedido: any;
  constructor() {
    this.subtotal_pedido = 0
  }

  ngOnInit(): void {
  }
  atras() {

  }
  cargar() {
    this.subtotal_pedido = 0
    for (let index = 0; index < this.data.pizzas.length; index++) {

      let precio_base = this.data.pizzas[index].tamano.precio_base
      let factorial = this.data.pizzas[index].tamano.factorial
      let mitad_diferente = this.data.pizzas[index].mitad
      let precio_pizza = 0

      if (this.data.pizzas[index].sabores > 0){
        if (mitad_diferente) {

            let primera_mitad = (this.data.pizzas[index].sabores[0].precio * factorial) / 2
            let segunda_mitad = (this.data.pizzas[index].sabores[1].precio * factorial) / 2
            precio_pizza = (primera_mitad + segunda_mitad)*1.1
          }
        else {
          console.log(this.data);
          precio_pizza = this.data.pizzas[index].sabores[0].precio * factorial
        }
      }
      else {
        let multiplicador = 4 / this.data.pizzas[index].ingredientes.length
        this.data.pizzas[index].ingredientes.forEach(element => {
          precio_pizza = precio_pizza + (element.precio * multiplicador)
        });
      }
      this.data.pizzas[index].subtotal = Math.round(precio_base + precio_pizza)
      this.subtotal_pedido = this.subtotal_pedido + this.data.pizzas[index].subtotal
    }
    for (let index = 0; index < this.data.otros_productos.length; index++) {
      let precio_otro_producto = this.data.otros_productos[index].precio * this.data.otros_productos[index].cantidad
      this.subtotal_pedido = Math.round(this.subtotal_pedido + precio_otro_producto)
    }
  }
  otrosProductos(){
    this.AvanzarOtrosProductos.emit()
  }
  agregarOtraPizza(){
    this.AgregarOtraPizza.emit()
  }
  finalizarPedido(){
    this.FinalizarPedido.emit(this.subtotal_pedido)
  }
}
