import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"]
})
export class AboutUsComponent implements OnInit {
  languageList = [
    { id: "1", name: "English", value: "en" },
    { id: "2", name: "French", value: "fr" },
    { id: "3", name: "German", value: "ge" },
    { id: "4", name: "Canada", value: "ca" }
    // { id: "5", name: "russian", value: "rn" }
  ];
  date = new Date();
  result: any;
  errorMessage: any;
  constructor(
  ) {}

  ngOnInit() {
    // let id = this.service.getProfileId();
    // this.service.profileData(id, "aboutus").subscribe(
    //   res => {
    //     this.result = res;
    //   },
    //   error => {
    //     this.errorMessage = error.error.message;
    //   }
    // );
  }
}
