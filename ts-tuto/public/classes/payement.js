export class Payement {
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return this.recipient + ' is owed ' + this.amount + ' DT  for ' + this.details;
    }
}
