import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { User } from "./user.model";

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    regustered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient) {}

    loginUser(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRpZx6Y8RfIorIiaJ9UXA7mjrQdBnmR4c',
            {
              "email":email,
              "password":password,
              "returnSecureToken":true
            }
            ).pipe(catchError(this.handleError), 
            tap(resData => {
             this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            })
     );
    }

    createNewUser(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRpZx6Y8RfIorIiaJ9UXA7mjrQdBnmR4c',
            {
              "email":email,
              "password":password,
              "returnSecureToken":true
            }
        ).pipe(catchError(this.handleError), 
               tap(resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
               })
        );
    }

    private handleAuthentication(email: string, localId: string, idToken: string, _expiresIn: number) {
        const expiresIn = new Date(new Date().getTime() + (_expiresIn * 1000));
        const user = new User( email, localId, idToken, expiresIn);
        this.user.next(user);
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = "Unknown error.";
        if(!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND': 
            errorMessage = "There is no user record corresponding to this identifier. The user may have been deleted.";
            break;
            case 'INVALID_PASSWORD': 
            errorMessage = "The password is invalid or the user does not have a password.";
            break;
            case 'USER_DISABLED':
            errorMessage = "The user account has been disabled by an administrator."
            break;
            case 'EMAIL_EXISTS': 
            errorMessage = "This email address is already in use by another account.";
            break;
            case 'OPERATION_NOT_ALLOWED': 
            errorMessage = "Password sign-in is disabled for this project.";
            break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            errorMessage = "We have blocked all requests from this device due to unusual activity. Please try again later."
            break;
            default:
            errorMessage = "Uknown error occured.";
            break;
        } 
        return throwError(errorMessage);  
    }

}