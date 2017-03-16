/// <reference path="../AbstractObserver.ts" />

class Numeric extends AbstractObserver {
    _name:string = "Numeric";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        let regEx = new RegExp("[0-9]", "g");
        let match = password.match(regEx);
        return match ? (match.length * this._weight) : this._penalty;
    }
}