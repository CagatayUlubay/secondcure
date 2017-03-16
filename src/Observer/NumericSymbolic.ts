/// <reference path="../AbstractObserver.ts" />

class NumericSymbolic extends AbstractObserver {
    _name:string = "NumericSymbolic";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        // Todo: Maybe given as parameter so the user can choose which symbols he allows (or this has to be a manual extra check?)
        return /[0-9]/.test(password) && /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password) ? this._weight : this._penalty;
    }
}