import { Component, OnInit } from '@angular/core';

declare var google;

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
  // cardsSection = [
  //   { matIcon: "fas fa-graduation-cap", count: '10', text: "Total Students", color: "linear-gradient(#6e00ff,#ef1010,#FF9800)" },
  //   { matIcon: "fas fa-user", count: '12', text: "Total Employess", color: "linear-gradient(#ff0052,#ef1010,#FF9800)" },
  //   { matIcon: "fas fa-graduation-cap", count: '10', text: "Total Courses", color: "linear-gradient(#ffe000,#ef1010,#FF9800)" },
  //   { matIcon: "fas fa-user", count: '10', text: "Total Batches", color: "linear-gradient(#ccff00,#ef1010,#FF9800)" },
  // ];
  constructor() { }

  ngOnInit() {
    this.drawChart();
  }
  drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Topping");
    data.addColumn("number", "Slices");
    data.addRows([["unattempted", 3], ["Inprogress", 1], ["Completed", 1]]);

    // Set chart options
    var options = {
      title: "Sales executive performance review",
      width: 400,
      height: 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(
      document.getElementById("piechart")
    );
    
    chart.draw(data, options);
     // Instantiate and draw our chart, passing in some options.
     var chart = new google.visualization.BarChart(
      document.getElementById("barchart")
    );

    chart.draw(data, options);
  }

}
