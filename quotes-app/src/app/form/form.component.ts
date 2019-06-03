import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inputs } from '../inputs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() inputs: Inputs;

  @Output() quoteDisplay = new EventEmitter<Inputs>();

  newQuote = new Inputs(0, '','',new Date(),0,0);
  submit(){
    this.quoteDisplay.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
