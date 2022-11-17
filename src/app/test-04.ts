/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector : 'ng-app',
    template : `
                <h2>Enter your first and last name</h2>
                <div>
                    <input type="text" value="" placeholder="First name" [(ngModel)]="first_name" name="first_name" (blur)="generate_user_name()" />
                    <input type="text" value="" placeholder="Last name" [(ngModel)]="last_name" name="last_name" (blur)="generate_user_name()" />
                    username: {{ user_name }}
                </div>
                `,
    styles : []
})
export class UserNameComponent {
    first_name:string = '';
    last_name:string = '';
    random_integer:number = Math.floor(Math.random() * 9) + 1;
    user_name:string = ``

    generate_user_name(){
        if(this.first_name && this.last_name) {
            this.user_name = `${this.first_name.toLowerCase()}_${this.last_name.toLowerCase()}_${this.random_integer}`
        } else {
            this.user_name = ""
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
                component : UserNameComponent
            }
        ])
    ],
    declarations : [UserNameComponent]
})
export class UserNameModule {};