import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import * as apiurl from '../../../services/constants/constants';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  reObj: any;
  mes: boolean;
  @Output() loginData=new EventEmitter<object>();
  responsemessage: any;
  constructor(private formbulder:FormBuilder,private common:CommonService,private router:Router) { }
  loginform:FormGroup;
  ngOnInit() {
    this.loginform=this.formbulder.group({
      username:['',Validators.required],
      password:['',[Validators.required]]
    })
  }



  login(){
console.log(this.loginform)
this.responsemessage="";
if(this.loginform.valid){
  let userdeat={
    Name:this.loginform.value.username,
    Password:this.loginform.value.password
  }
    this.common.postservice(apiurl.loginapi,userdeat).subscribe(data=>{
      this.reObj=data;
      if(this.reObj.status==200 && this.reObj.status !==undefined){

        console.log(data)
      let token;

        token=data["token"];
        localStorage.setItem("authToken",token);
        localStorage.setItem("Desiganation",this.reObj.result.Desiganation)
        localStorage.setItem("name",this.reObj.result.Name);
        localStorage.setItem("currentUser",JSON.stringify(this.reObj.result));
        this.common.currentuserstatus(this.reObj.result );
        this.router.navigate(['/Dashboard/admin']);

      }else{
        console.log(data)
this.responsemessage=this.reObj.message;
      }
    })
}else{
  this.validateAllFormFields(this.loginform);
}
      }
      validateAllFormFields(formGroup: FormGroup) {         //{1}
        Object.keys(formGroup.controls).forEach(field => {  //{2}
          const control = formGroup.get(field);             //{3}
          if (control instanceof FormControl) {             //{4}
            control.markAsTouched({ onlySelf: true });
          } else if (control instanceof FormGroup) {        //{5}
            this.validateAllFormFields(control);            //{6}
          }
        });
      }
}
