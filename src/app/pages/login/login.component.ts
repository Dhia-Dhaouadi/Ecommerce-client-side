import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from 'src/app/services/client-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
response:any;
token:any;
userData:any;
  constructor( private clienservice: ClientServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('',Validators.required),
  });

  Login(){
    if (this.registrationForm.valid) {
    this.clienservice.LoginAuth(this.registrationForm.value).subscribe(res=>{
      this.response=res;
      if(this.response.message=='Vous êtes connecté'){
        Swal.fire({
          position: 'top-end',
          title: 'Bienvenue à VentePrivée',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.token = this.response.Token;
        localStorage.setItem('isLoggedin', this.token);
        if (localStorage.getItem('isLoggedin')) {
          this.userData=jwt_decode(this.token);
          this.router.navigate(['/']);
        }
        else{}
      }
      else if (this.response.message=='Vérifier Email !'){
        Swal.fire({
          position: 'top-end',
          title: 'Vérifiez votre Email !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
      else if (this.response.message=='Vérifier Mot de Passe !') {
        Swal.fire({
          position: 'top-end',
          title: 'Vérifiez votre Mot de Passe !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
      else{
        Swal.fire({
          position: 'top-end',
          title: 'Quelque chose ne marche pas !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    })
    }
    else{
      this.registrationForm.markAllAsTouched();
    }
  }

}
