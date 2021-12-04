import { Component, ViewChild } from '@angular/core';
import { faBars, faBicycle, faMapMarkerAlt, faPizzaSlice, faPlus, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductosService } from './productos.service';
import { TamanosComponent } from './tamanos/tamanos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzafront';
  faBars = faBars;
  faPlus = faPlus;
  faPizzaSlice = faPizzaSlice;

  faShoppingBasket = faShoppingBasket;
  faShoppingCart = faShoppingCart;
  @ViewChild(TamanosComponent, {static: true}) _TamanosComponent: TamanosComponent;

  constructor() {

  }
  ngOnInit() {

  }
}
