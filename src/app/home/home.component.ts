import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { pipe } from 'rxjs';
import { ServicesService } from '../services.service';
import $ from "jquery";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faSearch = faSearch;
  icon = icon;
  faFontAwesome = faFontAwesome;

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

