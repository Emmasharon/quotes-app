import { Component, OnInit } from '@angular/core';
import { Inputs } from '../inputs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  inputs = [
    new Inputs(
      1,
      'Shwaz',
      'Be happy',
      new Date(2019,2,10),
      0,
      0
    )

  ];

  addInputs(event){

  }

  constructor() { }

  ngOnInit() {
  }

}
