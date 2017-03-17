/// <reference path="../AbstractObserver.ts" />

class ConsecutivelyUppercase extends AbstractObserver {
    _name:string = "ConsecutivelyUppercase";

    constructor(weight:number = 0) {
        super();
        this._weight = weight;
    }

    validate(password:string) {
        let regEx = new RegExp("[A-Z]{2}", "g");
        let match = password.match(regEx);
        return !!match;
    }

    score(password:string) {
        let regEx = new RegExp("[A-Z]{2}", "g");
        let match = password.match(regEx);
        return match ? -(match.length * this._weight) : 0;
    }
}