/// <reference path="../AbstractObserver.ts" />

class AlphaNumeric extends AbstractObserver {
    _name:string = "AlphaNumeric";

    constructor(weight:number = 0) {
        super();
        this._weight        = weight;
    }

    validate(password:string) {
        return /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
    }

    score(password:string) {
        return password.length * this._weight;
    }
}