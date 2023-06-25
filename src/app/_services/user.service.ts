import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, of, tap } from "rxjs";
import { User } from "../_model/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from "@angular/router";
import { ToastService } from "./toast.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url = 'http://localhost:8000'

    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json'
            }
        )
    }

    constructor(
        private router: Router,
        private http: HttpClient,
        private toastService: ToastService
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    signIn(email: string, password: string, type: string) {
        this.http.post<User | null>(`${this.url}/auth/signin`, { email, password, type }, this.httpOptions)
            .pipe(
                tap((response: User | null) => {
                    if (response) {
                        localStorage.setItem('token', response.access_token);
                        this.toastService.alertToast('Submitted successfully', 'success');
                    } else {
                        this.toastService.alertToast('Error occurred while signing in', 'error');
                    }
                    this.toastService.clearToast();
                }),
                catchError((error: any) => {
                    const errorMessage = (error.error.message as string) ?? 'An error occured while signin in'
                    this.toastService.alertToast(errorMessage, 'error');
                    this.toastService.clearToast();
                    return [];
                })
            )
            .subscribe();
    }
}