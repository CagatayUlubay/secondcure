/// <reference path="../AbstractObserver.ts" />

class Symbols extends AbstractObserver {
    _name:string = "Symbols";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        // Todo: Maybe given as parameter so the user can choose which symbols he allows (or this has to be a manual extra check?)
        return /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password);
    }
}