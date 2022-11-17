/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector : 'ng-app',
    template : `<form style="padding: 40px">
                    <h2>Login</h2>
                    <br/>
                    <input type="email" value="" [(ngModel)]="email" name="email" />
                    <br />
                    <small style="color: red" *ngIf="email_error">{{email_error}}</small>
                    <br/>
                    <br />
                    <input type="password" value="" [(ngModel)]="password" name="password" />
                    <br />
                    <small style="color: red" *ngIf="password_error">{{password_error}}</small>
                    <br />
                    <br />
                    <button type="submit" (click)="handleSubmit($event)">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {

    email:string = "";
    password:string = "";
    email_error: string = "";
    password_error: string = "";

    logged_in = false;

    handleSubmit($event){
        $event.preventDefault()
        const email_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const password_filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!email_filter.test(this.email)) {
            this.email_error = "Please provide a valid email address."
        } else {
            this.email_error = ""
        }

        if(!password_filter.test(this.password)) {
            this.password_error = "Password should be eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
        } else {
            this.password_error = ""
        }

        if(!this.password_error && !this.password_error) {
            this.logged_in = true
        } else {
            this.logged_in = false
        }

    }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};