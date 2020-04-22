import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    constructor(private http: HttpClient) {}

    createNewUser(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRpZx6Y8RfIorIiaJ9UXA7mjrQdBnmR4c',
            {
              "email":email,
              "password":password,
              "returnSecureToken":true
            }
        ).pipe(catchError(errorRes => {
                let errorMessage = "Unknown error.";
                if(!errorRes.error || !errorRes.error.error) {
                    return throwError(errorMessage);
                }
                switch (errorRes.error.error.message) {
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
                    errorMessage = "Uknown error.";
                    break;
                } 
                return throwError(errorMessage);
            })
        )
    }

}