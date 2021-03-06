/// <reference path="../AbstractObserver.ts" />

class AlphaSymbolic extends AbstractObserver {
    _name:string = "AlphaSymbolic";

    constructor(weight:number = 0) {
        super();
        this._weight        = weight;
    }

    validate(password:string) {
        // Todo: Maybe given as parameter so the user can choose which symbols he allows (or this has to be a manual extra check?)
        return /[a-zA-Z]/.test(password) && /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password);
    }

    score(password:string) {
        return this._weight;
    }
}