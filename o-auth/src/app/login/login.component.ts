import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
    // this.auth.signOut();
    this.auth.user.subscribe(user => {
      console.log(user);
    });
  }
  signup(): void {
    this.auth.signInWithEmailAndPassword(this.email, this.password).then(user=> {
      console.log(user);
    });
  }

}
