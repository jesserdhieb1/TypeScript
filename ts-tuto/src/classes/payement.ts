
import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payement implements HasFormatter{
    recipient : string;
    details:string;
    amount:number;

    constructor(c:string,d:string,a:number){
        this.recipient=c;
        this.details=d;
        this.amount=a;
    }

    format(){
        return this.recipient+' is owed '+this.amount + ' DT  for '+ this.details;
    }
}