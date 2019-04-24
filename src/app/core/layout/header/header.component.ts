import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { ROUTER_LINKS } from 'src/app/shared/constants/router-links.contants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // viewConstant = ViewConstants;
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
  // constructor(private service: ProfileService) {  }
  ngOnInit() {
    // this.code = this.service.getProfileId();
  }
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
