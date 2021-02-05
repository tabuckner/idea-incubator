import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDEAS_ROUTES } from '../ideas/ideas.module';
import { AuthProvider } from 'ngx-auth-firebaseui';


@Component({
  selector: 'idea-incubator-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  providers: Array<AuthProvider>;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.providers = [
      AuthProvider.Google,
      // AuthProvider.Microsoft, // TODO: Get Client tokens to support this.
      AuthProvider.ANONYMOUS,
      AuthProvider.EmailAndPassword,
      // AuthProvider.Github, // TODO: Get Client tokens to support this.
    ];
  }

  onLogInSuccess() {
    return this.router.navigate([IDEAS_ROUTES.ROOT_ROUTE]);
  }

}
