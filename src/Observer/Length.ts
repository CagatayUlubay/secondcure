/// <reference path="../AbstractObserver.ts" />

class Length extends AbstractObserver {
    _name:string = "Length";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        return password.length > 0 ? password.length * this._weight : 0;
    }
}