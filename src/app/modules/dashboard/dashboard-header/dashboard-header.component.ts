import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ViewConstants } from '../../app/shared/viewconstants';
// import { ProfileService } from '../../app/services/profile.service';
// import { AuthGuardService } from '../../app/core/router-guards/auth-guard.service';
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  // viewConstant = ViewConstants;
  constructor(private router: Router ) { }
  logout() {
    // this.router.navigate([ this.profileService.getProfileId() + "/" +this.viewConstant.loginUrl])
    // this.authService.logout();
  }
  ngOnInit() {
  }

}
