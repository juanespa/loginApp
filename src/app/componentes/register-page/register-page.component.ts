import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';

// importar dependencia flash angular
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashmessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then( (res) => {
      this.flashmessages.show('Usuario creado correctamente',
       {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privado']);
    }).catch((err) => {
      this.flashmessages.show(err.message,
       {cssClass: 'alert-danger', timeout: 4000});
      console.log(err);
    });
  }
}
