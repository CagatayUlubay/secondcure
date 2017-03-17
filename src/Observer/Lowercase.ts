/// <reference path="../AbstractObserver.ts" />

class Lowercase extends AbstractObserver {
    _name:string = "Lowercase";

    constructor(weight:number = 0) {
        super();
        this._weight        = weight;
    }

    validate(password:string) {
        let regEx = new RegExp("[a-z]", "g");
        let match = password.match(regEx);
        return !!match;
    }

    score(password:string) {
        let regEx = new RegExp("[a-z]", "g");
        let match = password.match(regEx);
        return (password.length-match.length) * this._weight;
    }
}