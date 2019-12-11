import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {

  }

  register() {
    console.log(this.model);

    this.authService.signUpUser(this.model.email, this.model.password);
    setTimeout( () => {
      this.authService.signInUser(this.model.email, this.model.password);
    }, 700);
    setTimeout( () => {
      this.router.navigate(['/list']);
    }, 1400);
  }

}
