/// <reference path="../AbstractObserver.ts" />

class Repeating extends AbstractObserver {
    _name:string = "Repeating";
    _threshold:number;

    constructor(threshold:number, weight:number = 0, penalty:number = 0) {
        super();
        this._threshold = threshold;
        this._weight    = weight;
        this._penalty   = penalty;
    }

    validate(password:string) {
        let regex = new RegExp("(.)\\1{" + (this._threshold-1) + ",}");
        return !regex.test(password) ? this._weight : this._penalty;
    }

    set threshold(threshold:number) {
        this._threshold = threshold;
    }

    get threshold() {
        return this._threshold;
    }
}