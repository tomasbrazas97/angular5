import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irish',
  templateUrl: './irish.component.html'
})
export class IrishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  uimhir : number;
	leath : number;

  	fuairHalf() {
  		this.leath = this.uimhir/2;
  	}


}
