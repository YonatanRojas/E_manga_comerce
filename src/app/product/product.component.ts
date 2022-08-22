import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor( private servicesService: ServicesService ) {

        //search

        document.addEventListener("keyup", function(e:any){

          if(e.target.matches(".navegation__bar")){


              document.querySelectorAll(".product__item").forEach(function (product:any){

                product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                  ?product.classList.remove("filtro")
                  :product.classList.add("filtro")

              });

          }
        });

   }

  ngOnInit(): void {

    this.servicesService.getProduct().subscribe((place:any) =>{
      this.products = place;
      console.log(this.products);
    });


    /*
    async onClickDelete(place: Place){
      const response =  await this.servicesService.deleteProduct(place);
      console.log(response);
    }
    */

  }

}
