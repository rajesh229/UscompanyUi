import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  token:any;
  httpOptions:any;
  private loginstatus=new BehaviorSubject('');
  publicsubject=this.loginstatus;
  constructor(private http:HttpClient) { }

  postservice(api,data){
    console.log(api);
  //   if(localStorage.getItem("authToken")!==undefined && localStorage.getItem("authToken")!==null && localStorage.getItem("authToken")!==''){
  //   this.token=localStorage.getItem("authToken");

  //   this.httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': this.token
  //     })
  //   }
  // }
let responce=this.http.post(api,data);
return responce;
  }

  getservice(api){
    console.log(api);
    if(localStorage.getItem("authToken")!==undefined && localStorage.getItem("authToken")!==null && localStorage.getItem("authToken")!==''){
    this.token=localStorage.getItem("authToken");

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    }
  }
let responce=this.http.get(api,this.httpOptions);
return responce;
  }
  Deleteservice(api){
    //console.log(api);
    if(localStorage.getItem("authToken")!==undefined && localStorage.getItem("authToken")!==null && localStorage.getItem("authToken")!==''){
    this.token=localStorage.getItem("authToken");

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    }
  }
let responce=this.http.delete(api,this.httpOptions);
return responce;
  }
  loginData(data){
    this.loginstatus.next(data);
  }
  isAuth(){
    this.token=localStorage.getItem("authToken");
    if(this.token){
      return true;
    }else{
      return false;
    }
  }
}
