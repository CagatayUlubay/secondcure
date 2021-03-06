/// <reference path="../AbstractObserver.ts" />

class Uppercase extends AbstractObserver {
    _name:string = "Uppercase";

    constructor(weight:number = 0) {
        super();
        this._weight        = weight;
    }

    validate(password:string) {
        let regEx = new RegExp("[A-Z]", "g");
        let match = password.match(regEx);
        return !!match;
    }

    score(password:string) {
        let regEx = new RegExp("[A-Z]", "g");
        let match = password.match(regEx);
        return (password.length-match.length) * this._weight;
    }
}