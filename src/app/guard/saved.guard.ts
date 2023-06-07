import { CanActivateFn } from '@angular/router';

export const savedGuard: CanActivateFn = (route, state) => {
  return true;
};
