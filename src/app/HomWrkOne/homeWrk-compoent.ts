import {Component} from "@angular/core";

@Component({
  selector: 'hme-wrk',
  templateUrl: './homeWrk-compoent.html',
  styleUrls: ['./homeWrk-compoent.css']
})
export class HomeWrkOneCompoent {
  mynem="faahad"
  myAge: number=24
  myNem(){
    return this.mynem
  }
}
