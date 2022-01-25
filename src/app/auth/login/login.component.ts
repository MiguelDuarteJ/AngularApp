import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

usuario = {
  email: '',
  pass: ''
}

constructor(private authService: AuthService){

}

Ingresar(){
  console.log(this.usuario);
  const {email, pass} = this.usuario;
  this.authService.register(email,pass).then(res=> {
    console.log("Registro Correcto",res);
  })
}

IngresarWithGoogle(){
  const {email, pass} = this.usuario;
  this.authService.loginWithGoogle(email,pass).then(res=> {
    console.log("Registro Correcto",res);
  })
}

  ngOnInit(): void {
  }

}
