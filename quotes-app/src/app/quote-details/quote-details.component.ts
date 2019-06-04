import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Inputs } from 'src/app/inputs';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
@Input() inputs: Inputs;
@Output() isComplete = new EventEmitter<boolean>();

quoteDelete(complete: boolean){
  this.isComplete.emit(complete);
}

  constructor() { }

  ngOnInit() {
}

}
