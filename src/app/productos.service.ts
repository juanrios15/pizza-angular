import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  listarPortadas() {
    return this.http.get<any>('http://127.0.0.1:8000/api/portadas/list');

  }
  listarTamanos() {
    return this.http.get<any>('http://127.0.0.1:8000/api/tamanos/list');
  }
  listarMenuTradicional() {
    return this.http.get<any>('http://127.0.0.1:8000/api/menutradicional/list');
  }
  listarOtrosProductos() {
    return this.http.get<any>('http://127.0.0.1:8000/api/otrosproductos/list');
  }
  listarTipoIngrendientes() {
    return this.http.get<any>('http://127.0.0.1:8000/api/tiposingredientes/list');
  }
  listarIngredientes() {
    return this.http.get<any>(`http://127.0.0.1:8000/api/ingredientes/list`)
  }
  listarIngredientesPorTipo(id) {
    return this.http.get<any>(`http://127.0.0.1:8000/api/ingredientes/list?tipos=${id}`)
  }
}
