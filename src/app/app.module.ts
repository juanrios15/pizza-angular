import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { TamanosComponent } from './tamanos/tamanos.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { MenusComponent } from './menus/menus.component';
import { ArmaPizzaTiposComponent } from './arma-pizza-tipos/arma-pizza-tipos.component';
import { MenuTradicionalComponent } from './menu-tradicional/menu-tradicional.component';
import { ResumenPedidoComponent } from './resumen-pedido/resumen-pedido.component';
import { OtrosProductosComponent } from './otros-productos/otros-productos.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TamanosComponent,
    InicioComponent,
    MenusComponent,
    ArmaPizzaTiposComponent,
    MenuTradicionalComponent,
    ResumenPedidoComponent,
    OtrosProductosComponent,
    FinalizarPedidoComponent

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
