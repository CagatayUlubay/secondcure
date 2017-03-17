/// <reference path="../AbstractObserver.ts" />

class NumericOnly extends AbstractObserver {
    _name:string = "NumericOnly";

    constructor(weight:number = 0) {
        super();
        this._weight = weight;
    }

    validate(password:string) {
        let regEx = new RegExp("^[0-9]*$", "g");
        let match = password.match(regEx);
        return !!match;
    }

    score(password:string) {
        let regEx = new RegExp("[0-9]", "g");
        let match = password.match(regEx);
        return match ? -(match.length * this._weight) : 0;
    }
}