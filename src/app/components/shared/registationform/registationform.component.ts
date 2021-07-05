import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import * as apiurl from '../../../services/constants/constants';

@Component({
  selector: 'app-registationform',
  templateUrl: './registationform.component.html',
  styleUrls: ['./registationform.component.css']
})
export class RegistationformComponent implements OnInit {
  Message: any;

  constructor(private formbulder:FormBuilder,private common:CommonService,) { }
  Registationform:FormGroup;
  response:any;
  ngOnInit() {
    this.Registationform=this.formbulder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required,Validators.email]],
      mobileNumber: ['', [Validators.required, ,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^\\d*$')]],
      Designation:['',Validators.required],
      password:['',Validators.required],
      gender:['',Validators.required],
    })
  }

  Createuser(){
    console.log()
    this.Message='';
    if(this.Registationform.valid){
const data={
  Name:this.Registationform.value.firstName,
  Gender:this.Registationform.value.gender,
  Emailid:this.Registationform.value.email,
  Desiganation:this.Registationform.value.Designation,
  Password:this.Registationform.value.password,
  Mobilenumber:this.Registationform.value.mobileNumber,
  isadmin:this.Registationform.value.Designation=="Admin"?true:false

}
this.common.postservice(apiurl.empsave,data).subscribe(data=>{
  console.log(data);
  this.response=data;
  this.Message=this.response.message;
})
    }else{
      this.validateAllFormFields(this.Registationform);
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
