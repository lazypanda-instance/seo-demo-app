import { Component, OnInit, OnDestroy } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html",
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    
}
}
