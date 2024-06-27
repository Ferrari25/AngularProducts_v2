//Este servicio de Angular permite realizar peticiones HTTP.
import { HttpClient } from '@angular/common/http';
//Este decorador marca la clase como un servicio que puede ser inyectado en otros componentes o servicios.
import { Injectable } from '@angular/core';
//De la librería RxJS, representa una fuente de datos que puede ser observada y de la cual se pueden suscribir para recibir datos.
import { Observable } from 'rxjs';
//Un modelo que probablemente define la estructura de los datos que se espera recibir del API.
import { ProductExt } from '../models/products.model';

//Define la URL base para las peticiones HTTP. En este caso, es una URL que devuelve una lista de productos con sus títulos y precios.
const baseUrl = 'https://dummyjson.com/products?limit=10&skip=10&select=title,price';

//Indica que este servicio será proporcionado a nivel de raíz, lo que significa que estará disponible en toda la aplicación.
@Injectable({providedIn: 'root'})


export class ProductService {

  constructor(private http: HttpClient) { }

/*
this.http.get<ProductExt>(baseUrl): 
Utiliza el método get de HttpClient para hacer una petición GET a la URL base 
y espera recibir un objeto que cumple con la estructura definida en ProductExt.
*/ 
  public getAll(): Observable<ProductExt> {
    return this.http.get<ProductExt>(baseUrl);
  }
}

