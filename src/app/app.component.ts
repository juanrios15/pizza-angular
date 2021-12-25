import { Component, ViewChild } from '@angular/core';
import { faBars, faBicycle, faMapMarkerAlt, faPizzaSlice, faPlus, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductosService } from './productos.service';
import { MenuTradicionalComponent } from './menu-tradicional/menu-tradicional.component';
import { ResumenPedidoComponent } from './resumen-pedido/resumen-pedido.component';
import { TamanosComponent } from './tamanos/tamanos.component';
import { OtrosProductosComponent } from './otros-productos/otros-productos.component';
import { ArmaPizzaTiposComponent } from './arma-pizza-tipos/arma-pizza-tipos.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public seccion: any;
  public data: any;
  delivery: boolean
  title = 'pizzafront';
  faBars = faBars;
  faPlus = faPlus;
  faPizzaSlice = faPizzaSlice;

  faShoppingBasket = faShoppingBasket;
  faShoppingCart = faShoppingCart;
  @ViewChild(TamanosComponent, {static: true}) _TamanosComponent: TamanosComponent;
  @ViewChild(ArmaPizzaTiposComponent, { static: true }) _ArmaPizzaTiposComponent: ArmaPizzaTiposComponent;
  @ViewChild(MenuTradicionalComponent, { static: true }) _MenuTradicionalComponent: MenuTradicionalComponent;
  @ViewChild(ResumenPedidoComponent, { static: true }) _ResumenPedidoComponent: ResumenPedidoComponent;
  @ViewChild(OtrosProductosComponent, { static: true }) _OtrosProductosComponent: OtrosProductosComponent;

  constructor() {
    this.delivery = true
    this.seccion = "inicio";
    this.data = {
      delivery: true,
      pizzas: [],
      otros_productos: [],
      valor_total: 0
    }
  }
  ngOnInit() {
    let pizza = {
      tamano: {},
      mitad: false,
      sabores: [],
      cantidad: 1,
      ingredientes: [],
    };
    this.data.pizzas.push(pizza)
  }
  avanzar(event) {
    this.seccion = "size"
    this.data.delivery = event

  }
  avanzarMenu (event) {
    this.data.pizzas[this.data.pizzas.length-1].tamano = event
    console.log(this.data);
    this.seccion = "menus"

  }
  accionAtrasTamanos(event) {
    this.seccion = "inicio"
  }
  avanzarArmaTuPizza(event) {
    console.log(event);

    this.seccion = "arma_tu_pizza"
    this._ArmaPizzaTiposComponent.cargar(event)

  }
  avanzarTradicional(event) {
    this.seccion = "menu_clasico"
    console.log(this.data);

    this._MenuTradicionalComponent.cargar(event)

  }
  accionAtrasMenus(event) {
    this.seccion = "size"
  }
  accionAtrasMenuTrad(event) {
    this.seccion = "menus"
  }
  avanzarResumen(event) {
    console.log(event);
    this.data.pizzas[this.data.pizzas.length-1].sabores.push(event)
    console.log(this.data);
    this._ResumenPedidoComponent.cargar()
    this.seccion = "resumen-pedido"
  }
  seleccionarSegundaMitad(event) {
    this.data.pizzas[this.data.pizzas.length-1].mitad = true
    this.data.pizzas[this.data.pizzas.length-1].sabores.push(event)
    console.log(this.data);
    this.seccion = "menu_clasico"
    this._MenuTradicionalComponent.menuSegundaMitad()
  }
  avanzarOtrosProductos(event){
    this.seccion = "otros_productos"
    this._OtrosProductosComponent.cargar(event)
  }
  accionAtrasOtros(event) {
    this.seccion = "resumen-pedido"
  }
  avanzarResumenOtros(event) {
    this.data.otros_productos.push(event)
    this._ResumenPedidoComponent.cargar()
    this.seccion = "resumen-pedido"
  }
  agregarOtraPizza(event) {
    this.seccion = "size"
    let pizza = {
      tamano: {},
      mitad: false,
      sabores: [],
      cantidad: 1,
      ingredientes: []
    };
    this.data.pizzas.push(pizza)
  }
  accionAtrasTiposArma(event) {
    this.seccion = "menus"
  }
  avanzarResumenArma(event) {
    console.log(event);
    event.forEach(element => {
      this.data.pizzas[this.data.pizzas.length-1].ingredientes.push(element)
    });
    console.log(this.data);
    this._ResumenPedidoComponent.cargar()
    this.seccion = "resumen-pedido"
  }
  segundaMitadArmaPizza(event) {
    this.data.pizzas[this.data.pizzas.length-1].mitad = true
    event.forEach(element => {
      this.data.pizzas[this.data.pizzas.length-1].ingredientes.push(element)
    });
    console.log(this.data);
    this.seccion = "arma_tu_pizza"
    this._ArmaPizzaTiposComponent.menuSegundaMitad()
  }
  finalizarPedido(event){
    this.seccion = "finalizar_pedido"
    this.data.valor_total = event
    console.log(this.data);

  }
}
