/// <reference path="../AbstractObserver.ts" />

class AlphaNumeric extends AbstractObserver {
    _name:string = "AlphaNumeric";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        return /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
    }
}