import { FlashMessagesService } from 'angular2-flash-messages';
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
  constructor(public auth: AuthService, public router: Router, public flashmesage: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.auth.loginEmail(this.email, this.password)
    .then((res) => {
      this.flashmesage.show('Usuario logueado correctamente',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privado']);
    }).catch((err) => {
      this.flashmesage.show(err.message,
        {cssClass: 'alert-danger', timeout: 4000});
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

  onclickGoogleLogin() {
    this.auth.loginGoogle()
    .then((res) => {
      this.router.navigate(['/privado']);
    }).catch(err => console.log(err.message));

  }

}
