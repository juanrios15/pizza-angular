import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {
  @Input() data: any;
  pedido_form = new FormGroup(
    {
      nombre_cliente : new FormControl('', Validators.required),
      direccion_cliente : new FormControl(''),
      email : new FormControl('', Validators.required),
      telefono : new FormControl('', Validators.required)
    }
  )
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

  }

}
