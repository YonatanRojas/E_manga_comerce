import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
//import { new_product } from '../home/home.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  title = 'E-Comerce-Manga';

  public formulario: FormGroup;

  constructor( private servicesService: ServicesService ) {

    this.formulario = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      categori: new FormControl(),
      price: new FormControl(),
      image: new FormControl()
    })

   }

  ngOnInit(): void {

  }

  async onSubmit(){
    console.log(this.formulario.value);
    const response = await this.servicesService.addProduct(this.formulario.value);
    console.log(response);
    alert("El producto a sido agregado!")
  }

}

