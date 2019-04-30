import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit, HostListener} from '@angular/core';
import { ROUTER_LINKS } from 'src/app/shared/constants/router-links.contants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  code: any;
  headerMenuList = [
    { name: "Home", routerLink: "/" + this.code + "/" + ROUTER_LINKS.homeForm_Link },
    { name: "Aboutus", routerLink: "/" + this.code + "/" +ROUTER_LINKS.aboutUs_Link },
    { name: "Contact Us", routerLink: "/" + this.code + "/" + ROUTER_LINKS.contactUs_Link },
  ];
  sideNavList = [
    { name: "Login", routerLink: "/" + this.code + "/" + ROUTER_LINKS.login_Link },
    { name: "Signup", routerLink: "/" + this.code + "/" + ROUTER_LINKS.signup_Link }
  ];

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event']) onscroll($event) {
    console.log($event);
  }
}
