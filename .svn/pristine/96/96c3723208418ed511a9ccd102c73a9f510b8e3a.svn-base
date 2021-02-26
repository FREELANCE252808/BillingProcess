import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountService } from './account.service';


@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router,private account :AccountService) { }
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean {
		if (this.account.checkLoginStatus())
			return true;
		else
		this.router.navigate(['/login']);
		return false;
	}
}
