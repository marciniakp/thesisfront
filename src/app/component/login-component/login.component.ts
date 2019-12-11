import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  model: any = {};
  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {

  }

  login() {
    this.authService.signInUser(this.model.email, this.model.password);
  }

}
