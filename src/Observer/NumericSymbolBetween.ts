/// <reference path="../AbstractObserver.ts" />

class NumericSymbolBetween extends AbstractObserver {
    _name:string = "NumericSymbolBetween";

    constructor(weight:number = 0) {
        super();
        this._weight        = weight;
    }

    validate(password:string) {
        let regEx = new RegExp("[^a-zA-Z]{1}", "g");
        let match = (password.substr(1, password.length-2)).match(regEx);
        return !!match;
    }

    score(password:string) {
        let regEx = new RegExp("[^a-zA-Z]{1}", "g");
        let match = (password.substr(1, password.length-2)).match(regEx);
        return match ? match.length * this._weight : 0;
    }
}