import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import * as apiurl from '../../../../services/constants/constants';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  response: any;
  deleteresponse: any;
userdata=localStorage.getItem("Desiganation");
userdatad:any
isadmin:boolean=false;
  constructor(private common:CommonService) { }
UsersData:any;
  ngOnInit() {
    //console.log(this.router.snapshot)
    this.common.currentUser.subscribe(data=>{
     // debugger;
     if(data!==undefined  && data!==null ){
      this.userdatad=data;
      this.isadmin=this.userdatad.isadmin;

      }
    });
   // debugger;

    if(this.userdatad!==undefined && this.userdatad!==null && this.userdatad!=="undefined" && this.userdatad!==''){

      if(this.userdatad.Desiganation=="Admin"){
        this.getUsersData(apiurl.getallusers);
      }else if(this.userdatad.Desiganation=="Manager"){
        this.getUsersData(apiurl.getstaff);
      }
    }
  }
getUsersData(url){
this.common.getservice(url).subscribe(data=>{
  debugger;
 // console.log(this.response.status)
  if(data){
   // console.log(this.response.status)
    this.response=data;
    if(this.response.result!==""){
this.UsersData=this.response.result
    }else{
      console.log(this.response.status)
      if(this.response.status==580){
        alert(this.response.message)
      }
    }
  }
})
}
Removeuser(data){
  let api=apiurl.removeuser+"/"+data._id;
this.common.Deleteservice(api).subscribe(result=>{
  this.deleteresponse=result
  if(this.deleteresponse.message=="user Delete  Succefully"){
    this.getUsersData(apiurl.getallusers)
  }else{
    alert(this.deleteresponse.message)
  }
  console.log(result);
})
}
}
