import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [
    DemoService
  ]
})
export class DetailsComponent implements OnInit {

  countryDetailsList: Array<any>;
  countryName: string;

  constructor(private demoService: DemoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((urlParams) => {
      this.countryName = urlParams.countryName;
    });

    this.demoService.getCountryDetails(this.countryName).subscribe(resp => {
      this.countryDetailsList = resp;
    });
  }
}
