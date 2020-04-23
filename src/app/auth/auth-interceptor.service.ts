import { Injectable } from "@angular/core";
import { HttpRequest, HttpInterceptor, HttpHandler, HttpParams } from "@angular/common/http";
import { AuthenticationService } from "./auth.service";
import { take, exhaustMap } from "rxjs/operators";
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                if(!user) {
                    return next.handle(request);
                }
                const modifiedReq = request.clone({
                    params: new HttpParams().set('auth',user.token)
                })
                return next.handle(modifiedReq);
            })
        );
    }

}