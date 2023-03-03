import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  userData:any
  token:any
  Loggedin:any;
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('isLoggedin');
    if (localStorage.getItem('isLoggedin')) {
      this.userData=jwt_decode(this.token);
      this.Loggedin = true;
    }
    else{
      this.Loggedin = false;
    }
    console.log(this.Loggedin);
  }

  onLogout(e: Event) {
    e.preventDefault();
    localStorage.removeItem('isLoggedin');
    this.Loggedin = false;
    this.router.navigate(['/Login']);
    Swal.fire({
      position: 'top-end',
      title: 'Vous êtes Déconnecté',
      text: '',
      showConfirmButton: false,
      timer: 3000,
      icon: 'success',
    });
  }

}
