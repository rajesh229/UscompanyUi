import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:String;
  userdatad:any;
  constructor(private router:Router,private common:CommonService) { }

  ngOnInit() {
    this.common.currentUser.subscribe(data=>{
      // debugger;
      if(data!==undefined  && data!==null ){
       this.userdatad=data;
      // this.isadmin=this.userdatad.isadmin;
      this.name=this.userdatad.Name;
       }
     });
    //this.name=localStorage.getItem("name");
  }
  logout(){
this.router.navigate(["/"]);
    localStorage.removeItem("name");
    localStorage.removeItem("authToken");
    localStorage.removeItem("Desiganation");
    localStorage.removeItem("isPasswordchange");
    //this.common.publicsubject.unsubscribe();
  }
}
