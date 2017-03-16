/// <reference path="../AbstractObserver.ts" />

class Alphabetic extends AbstractObserver {
    _name:string = "Alphabetic";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        return /[a-zA-Z]/.test(password);
    }
}