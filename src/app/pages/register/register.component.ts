import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/model/Client.model';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  client = new ClientModel();
  response: any;
  constructor(
    private clienservice: ClientServiceService,
    private router: Router
  ) {}
  ngOnInit() {}

  registrationForm = new FormGroup({
    NomComplet: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Ville: new FormControl('', Validators.required),
    Telephone: new FormControl('', Validators.required),
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[!@#$%^&*])/),
    ]),
  });

  submit() {
    if (this.registrationForm.valid) {
      this.clienservice
        .AddClient(this.registrationForm.value)
        .subscribe((res) => {
          this.response = res;
          if (this.response.message == 'Email already exist !') {
            Swal.fire({
              position: 'top-end',
              title: 'Email exist déja !',
              text: '',
              showConfirmButton: false,
              timer: 3000,
              icon: 'error',
            });
          } else if (this.response.message == 'UserName already exist !') {
            Swal.fire({
              position: 'top-end',
              title: 'Nom d utilisateur exist déja !',
              text: '',
              showConfirmButton: false,
              timer: 3000,
              icon: 'error',
            });
          } else {
            Swal.fire({
              position: 'top-end',
              title: 'Bienvenue à VentePrivée',
              text: '',
              showConfirmButton: false,
              timer: 3000,
              icon: 'success',
            });
            this.router.navigate(['/Login']);
          }
        });
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
