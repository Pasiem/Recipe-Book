import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, UrlSegment } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "./auth.service";
import { map, take } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AuthGaurd implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, 
                routerstate: RouterStateSnapshot
                ): boolean |  Promise<boolean> | Observable<boolean | UrlTree> {
                    return this.authService.user.pipe(
                        take(1),
                        map(user => {
                            const isAuth = !!user;
                            if (isAuth) {
                                return true;
                            } else {
                                return this.router.createUrlTree(['/auth']);
                            }
                        })
                    );
    } 
}