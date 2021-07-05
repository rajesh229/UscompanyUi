
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CommonService } from "./common.service";
//import { UserService } from "";

@Injectable()
export class AuthGaurd implements CanActivate{

    constructor(private userService: CommonService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        let isLoggedin;

        isLoggedin = this.userService.isAuth()
        if(isLoggedin) {
            return true;
        } else {
            this.router.navigate(['/']);
        }


    }



}
