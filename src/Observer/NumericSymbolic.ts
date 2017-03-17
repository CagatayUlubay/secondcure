/// <reference path="../AbstractObserver.ts" />

class NumericSymbolic extends AbstractObserver {
    _name:string = "NumericSymbolic";

    constructor(weight:number = 0) {
        super();
        this._weight        = weight;
    }

    validate(password:string) {
        // Todo: Maybe given as parameter so the user can choose which symbols he allows (or this has to be a manual extra check?)
        return /[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password);
    }

    score(password:string) {
        return this._weight;
    }
}