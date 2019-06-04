import { Component, OnInit } from '@angular/core';
import { Inputs } from '../inputs';
import { DatePipe} from "node_modules/@angular/common"
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

  addInputs(input){
    var ema = this.inputs.length;
    input.id = ema++;
    input.completeDate = new Date(input.completeDate);
    this.inputs.unshift(input);
  }
  quoteDelete(isComplete){
    let toDelete = confirm (`Are you sure you want to delete this? $ {this.inputs[index].name}`)
    if (toDelete){
      this.inputs.splice(index,1);
    }
  }
  likes(i){
    this.inputs[i].upVote +=1;
   }
   dislikes(i){
     this.inputs[i].downVote +=1;
   }

  constructor() { }

  ngOnInit() {
  }

}
