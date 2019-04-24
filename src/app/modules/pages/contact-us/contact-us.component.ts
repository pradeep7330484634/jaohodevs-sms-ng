import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  result: any;
  errorMessage: string;
  constructor() { }

  ngOnInit() {
    // let id = this.service.getProfileId();
    // this.service.profileData(id, 'contactus').subscribe(res => {
    //   this.result =res;
    // },
    //   (error) => {
    //     this.errorMessage = error.error.message;
    // }
    // ) 
  }

}
