/// <reference path="../AbstractObserver.ts" />

class ConsecutivelyLowercase extends AbstractObserver {
    _name:string = "ConsecutivelyLowercase";

    constructor(weight:number = 0) {
        super();
        this._weight = weight;
    }

    validate(password:string) {
        let regEx = new RegExp("[a-z]{2}", "g");
        let match = password.match(regEx);
        return !!match;
    }

    score(password:string) {
        let regEx = new RegExp("[a-z]{2}", "g");
        let match = password.match(regEx);
        return match ? -(match.length * this._weight) : 0;
    }
}