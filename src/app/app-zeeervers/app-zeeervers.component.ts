import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-zeeervers',
  templateUrl: './app-zeeervers.component.html',
  styleUrls: ['./app-zeeervers.component.css']
})
export class AppZeeerversComponent  {
  pragh=false
  serverGettign=" "
  serveraddign="Server"
  states:String="Off"
  allownce=true;
  hideADddata=false

  servercreation(){
    this.hideADddata=true;
    this.serveraddign="server was created naem is "+this.serveraddign;
  }
  getValue(event: any){
    this.serverGettign=event.target.value;
  }
  praghh(){

  }

  hiddesho(){
    this.pragh=true


  }

}
