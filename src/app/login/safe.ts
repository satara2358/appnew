import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./serviceLogin";

export class SafeLogin implements CanActivateFn{

  constructor(private LoginSer: LoginService, private router: Router){

  }

  CanActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
  }

}
