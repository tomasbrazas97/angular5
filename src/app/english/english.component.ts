import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html'
})
export class EnglishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  number : number;
	half : number;

  	getHalf() {
  		this.half = this.number/2;
  	}
}
