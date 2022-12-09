import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Atividade complentar - Vithoria Arenda';

  login = 'admin';
  password = '';

  auth = null;

  list = null;

  constructor() {}

  postLogin() {
    if (this.login == 'admin' && this.password == '123') {
      localStorage.setItem('user', this.login);
      localStorage.setItem('password', this.password);

      this.auth = {
        username: this.login,
        password: this.password,
      };
    } else {
      alert('Login invalido');
    }
    console.log(this.auth);
  }

  postLogout() {
    this.auth = null;
  }

  getList() {}

  ngOnInit() {
    this.auth = {
      username: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    };
  }
}
