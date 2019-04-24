import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // result: ProfileCodeInterface;
  errorMessage: string;
  constructor() { }

  ngOnInit() {
    // let id = this.service.getProfileId();
    // this.service.profileData(id, 'home').subscribe((res: ProfileCodeInterface) => {
    //   console.log(res);
    //   this.result = res;
    // },
    //   (error) => {
    //     this.errorMessage = error.error.message;
    //   }
    // );
  }

}
