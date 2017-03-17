/// <reference path="../AbstractObserver.ts" />

class Length extends AbstractObserver {
    _name:string = "Length";

    constructor(weight:number = 0) {
        super();
        this._weight        = weight;
    }

    validate(password:string) {
        return password.length > 0;
    }

    score(password:string) {
        return password.length * this._weight;
    }
}