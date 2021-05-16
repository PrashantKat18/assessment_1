import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable()
export class AddProvider {
    isUserLoggedIn: boolean = false;
    userName: any
    userId: string;
    password: string
    login(userId: string, password: string): Observable<any> {
        this.userId = userId
        this.password = password
        console.log(this.userId, this.password);
        localStorage.setItem('userId', this.userId)
        localStorage.setItem('password', this.password)
        this.isUserLoggedIn = userId == 'abc@media.com' && password == 'abc123' || userId == 'def@media.com' && password == 'def123';
        localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
        this.userName = userId;
        console.log(this.userName, 'is');
        return of(this.isUserLoggedIn).pipe(
        );
    }

    logout(): void {
        this.userName = ""
        localStorage.removeItem('userId');
        localStorage.removeItem('password')
        this.isUserLoggedIn = false;
        localStorage.removeItem('isUserLoggedIn');
    }
}


