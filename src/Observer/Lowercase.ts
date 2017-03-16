/// <reference path="../AbstractObserver.ts" />

class Lowercase extends AbstractObserver {
    _name:string = "Lowercase";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        return /[a-z]/.test(password);
    }
}