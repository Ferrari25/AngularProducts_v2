import { Component, Input } from '@angular/core';
import { Products } from '../../models/products.model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() viewMode = false;
  @Input() currentElement: Products = new Products();
  
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    //this.toastr.success('Hello world!', 'Toastr fun!',);
    this.toastr.error('Modificacion no disponible', 'Error', {positionClass: 'toast-center-center', timeOut: 6000})
  }
}

