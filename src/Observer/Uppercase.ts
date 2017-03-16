/// <reference path="../AbstractObserver.ts" />

class Uppercase extends AbstractObserver {
    _name:string = "Uppercase";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        return /[A-Z]/.test(password);
    }
}