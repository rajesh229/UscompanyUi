import { environment } from "src/environments/environment";

// import(environment)
const apiUrl=environment.baseurl;

export const loginapi=apiUrl+"/Employess/login";
export const empsave=apiUrl+"/Employess/empsave";
export const getallusers=apiUrl+"/Employess/getallusers";
export const removeuser=apiUrl+"/Employess/removeuser";
export const getstaff=apiUrl+"/Employess/getstaffony";
export const mailutl="";
