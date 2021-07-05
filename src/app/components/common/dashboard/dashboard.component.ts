import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userdatad:any;
  constructor(private common:CommonService) { }
leftmenu:boolean=true;
  ngOnInit() {
    this.common.currentUser.subscribe(data=>{
      // debugger;
      if(data!==undefined  && data!==null ){
       this.userdatad=data;
      // this.isadmin=this.userdatad.isadmin;

       }
     });
    if(this.userdatad.Desiganation=="Staff"){
this.leftmenu=false;
    }
  }

}
