import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PermissionsGuard implements CanActivate {
  canActivate(): Observable <boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
    if (this.hasRser()){
      return true
    }
    alert('no permiso')
    return false
  }

  hasRser(): boolean{
    return false
  }
}
