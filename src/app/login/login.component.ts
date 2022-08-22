import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    const email = document.querySelector(".mail") as HTMLInputElement;
    const password = document.querySelector(".password") as HTMLInputElement;
    var button = document.querySelector(".button") as HTMLButtonElement;

    var users = [["yonatanrojaszero@gmail.com", "1234"], ["luciana@gmail.com", "4321"], ["rodri@gmail.com", "2222"]]

    button.addEventListener("click",function(){
      
      if (button != null){
        
        for (let i = 0; i < users.length; i++) {
        
          if (email.value === users[i][0]){
            if (password.value === users[i][1]){             
              location.href = "/product";
            }else{
              location.href = "/home"
            }
          }
        }

      }else{
        alert("Ingrese su correo o contraseña.")
      }
    }) 

  }



}                

