/// <reference path="../AbstractObserver.ts" />

class AlphabeticOnly extends AbstractObserver {
    _name:string = "AlphabeticOnly";

    constructor(weight:number = 0) {
        super();
        this._weight        = weight;
    }

    validate(password:string) {
        return /^[a-zA-Z]*$/.test(password);
    }

    score(password:string) {
        let match = password.match(/^[a-zA-Z]*$/);
        return !!match ? -(match.length * this._weight) : 0;
    }
}