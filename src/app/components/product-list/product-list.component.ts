import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Products } from '../../models/products.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductListComponent,CommonModule,ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  //Una propiedad opcional que almacena un arreglo de publicaciones.
  products?:Products[];

  //propiedad que almacena la publicación actualmente seleccionada.
  currentElement: Products = new Products();

  // El constructor inyecta una instancia del ProductService para usarla en el componente.
  constructor(private productService: ProductService) { }

  //Método del ciclo de vida del componente que se ejecuta al inicializarse. Aquí se llama al método retrieveProduct() para obtener las publicaciones.
  ngOnInit(): void {this.retrieveProducts();}

// Método para obtener todas las publicaciones desde el ProductService.
//next: Función que se ejecuta cuando se reciben los datos correctamente, asignando las publicaciones a la propiedad products.
//error: Función que se ejecuta si ocurre un error en la petición, imprimiendo el error en la consola.
retrieveProducts(): void {
  this.productService.getAll()
  .subscribe({
    next: (data) => {
      this.products = data.product;
       if (data && data.product) {
         this.products = data.product;
         console.log(this.products[1]?.price); // Accede al precio del segundo producto si existe
         console.log(data);
       } else {
         console.log(data);
         console.error('Error al recuperar productos:', Error);
       }
    },
    error: (error) => {console.error('Error al recuperar productos:', error);}
  });
}
  
//setActiveElement(element: Product): Método que asigna la publicación seleccionada a currentElement.
  setActiveElement(element: Products): void {this.currentElement = element;}
}

