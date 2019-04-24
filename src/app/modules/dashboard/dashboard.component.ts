import { Component, OnInit } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { UserRoles } from 'src/app/shared/models/user-roles';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ROUTER_LINKS } from 'src/app/shared/constants/router-links.contants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  settingFlag: boolean = false;
  menuListItems: UserRoles[] = [
    // {
    //   name: "Dashboard",
    //   roles: ["SA", "A", "U"],
    //   fields: [{
    //     name: "profile",
    //     routerLink: ROUTER_LINKS.mainDashboardUrl + "/" + ROUTER_LINKS.dashboardUrl + "/" + ROUTER_LINKS.profileUrl
    //   }, {
    //     name: "settings",
    //     routerLink: ROUTER_LINKS.mainDashboardUrl + "/" + ROUTER_LINKS.dashboardUrl + "/" + ROUTER_LINKS.profileUrl
    //   }
    //   ]
    // },
    // {
    //   name: "Students",
    //   roles: ["SA", "A"],
    //   fields: [{
    //     name: "Exams",
    //     routerLink: ROUTER_LINKS.mainDashboardUrl + "/" + ROUTER_LINKS.dashboardUrl + "/" + ROUTER_LINKS.studentUrl
    //   }, {
    //     name: "Batches",
    //     routerLink: ROUTER_LINKS.mainDashboardUrl + "/" + ROUTER_LINKS.dashboardUrl + "/" + ROUTER_LINKS.studentUrl
    //   }
    //   ]
    // },
    // {
    //   name: "Reports",
    //   roles: ["SA"],
    //   fields: [{
    //     name: "Basic report",
    //     routerLink: ROUTER_LINKS.mainDashboardUrl + "/" + ROUTER_LINKS.dashboardUrl + "/" + ROUTER_LINKS.reportUrl
    //   }, {
    //     name: "Total report of exams",
    //     routerLink: ROUTER_LINKS.mainDashboardUrl + "/" + ROUTER_LINKS.dashboardUrl + "/" + ROUTER_LINKS.reportUrl
    //   },
    //   ]
    // },
    {
      name: "Forms",
      roles: [""],
      fields: [
        {
          name: "Home-form",
          routerLink: "/" + ROUTER_LINKS.dashboard_Link + "/" + ROUTER_LINKS.homeForm_Link
        },
        {
          name: "aboutus-form",
          routerLink: "/" + ROUTER_LINKS.dashboard_Link + "/" + ROUTER_LINKS.aboutusForm_Link
        },
        {
          name: "contactus-form",
          routerLink: "/" + ROUTER_LINKS.dashboard_Link + "/" + ROUTER_LINKS.contactusForm_Link
        }
      ]
    },
    
  ];

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,

    private overlayContainer: OverlayContainer
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  darkTheme() {
    this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    // alert();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  getRoles() {
    // let value = this.profileService.getRole;
    // console.log('Role:', value);
  }
  settingFlagToggle() {
    this.settingFlag = !this.settingFlag;
  }
  ngOnInit() {
    this.getRoles();
  }

}
