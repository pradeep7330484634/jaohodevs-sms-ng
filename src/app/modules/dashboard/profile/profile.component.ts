import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cardsSection = [
    { matIcon: "fas fa-graduation-cap", count: '10', text: "Total Students", color: "orange" },
    { matIcon: "fas fa-user", count: '12', text: "Total Employess", color: "#9575cd" },
    { matIcon: "fas fa-graduation-cap", count: '10', text: "Total Courses", color: "pink" },
    { matIcon: "fas fa-user", count: '10', text: "Total Batches", color: "blue" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
