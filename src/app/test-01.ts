/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component,NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule  } from '@angular/common';

@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <b>Monthly Payment:</b> {{getMonthlyPayment() | currency }} <br/>
                    <b>Late Payment Fee : {{getLatePayment() | currency}}</b> <br/>
                </div>`
})
export class Test01Component {

    loan_amount:number = 1000;
    monthly_payment:number = 200;
    late_payment = 10;

    setMonthlyPayment(amount:number) {
        this.monthly_payment = amount
    }
    
    getMonthlyPayment() {   
        if(!this.loan_amount) {
            return 'N/A'
        }
        let new_monthly_payment = 0.02 * this.loan_amount
        this.setMonthlyPayment(new_monthly_payment)
        return new_monthly_payment
    }

    getLatePayment() {
        if(!this.loan_amount) {
            return 'N/A'
        }
        return this.monthly_payment * 0.05
    }
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component],
})
export class Test01Module {}