import { Pipe} from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe  {
  //
  // transform(value: any, args?: any): number {
  //
  //   let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
  //   var dateDifference =Math.abs(value-todayWithNoTime )// returns value in milliseconds
  //   const secondsInADay= 86400; //60 seconds*60 minutes in an hour *24 hours
  //
  //   var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds
  //
  //   var dateCounter = dateDifferenceSeconds/secondsInADay;
  //
  //   if (dateCounter >= 1 && value > todayWithNoTime){
  //       return dateCounter;
  //   }else{
  //   return null;
  //   }
  // }
}
