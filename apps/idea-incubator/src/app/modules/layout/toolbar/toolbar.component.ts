import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkMenuItem } from 'ngx-auth-firebaseui';
import { HOME_ROUTES } from '../../home/home.module';
import { IDEAS_ROUTES } from '../../ideas/ideas.module';


@Component({
  selector: 'idea-incubator-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public links: LinkMenuItem[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.links = [
      { icon: 'home', text: 'Home', callback: () => this.goToHome() },
      { icon: 'list', text: 'Ideas', callback: () => this.goToList() },
    ];
  }

  onLogOut() {
    this.router.navigate([HOME_ROUTES.ROOT_ROUTE]);
  }

  goToHome() {
    return this.router.navigate([HOME_ROUTES.ROOT_ROUTE])
  }

  goToList() {
    return this.router.navigate([IDEAS_ROUTES.ROOT_ROUTE])
  }

}
