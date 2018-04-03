import { Router } from '@angular/router';
import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.auth.loginEmail(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/privado']);
    }).catch((err) => {
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

}
