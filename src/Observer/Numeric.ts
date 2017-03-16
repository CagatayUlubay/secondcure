/// <reference path="../AbstractObserver.ts" />

class Numbers extends AbstractObserver {
    _name:string = "Numbers";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        return /[0-9]/.test(password);
    }
}