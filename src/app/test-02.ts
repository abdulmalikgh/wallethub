/**
 * Update the following components to meet the requirements : 
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule,EventEmitter,Output  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'textfield',
    template : '<input type="text" [(ngModel)]="field" value="" (input)="handleInput()" />'
})
export class TextField {
    field = "";
    @Output() passInputData : EventEmitter<any> = new EventEmitter<any>()

    handleInput() {
        this.passInputData.emit(this.field)
    }
}

@Component({
    selector : 'child-component',
    template : `<h2>Title: {{title}}<h2><br/><textfield (passInputData)="passInputData($event)"></textfield>`
})
export class ChildComponent {
    title:string = ''
    @Output() passInputDataToApp : EventEmitter<any> = new EventEmitter<any>()
    passInputData(field){
        this.title = field
        this.passInputDataToApp.emit(field)
    }
}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component (passInputDataToApp)="passInputDataToApp($event)"></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title:string = "";

    passInputDataToApp(field){
        this.title = field
    }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module {};