/// <reference path="../AbstractObserver.ts" />

class Symbolic extends AbstractObserver {
    _name:string = "Symbolic";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        // Todo: Maybe given as parameter so the user can choose which symbols he allows (or this has to be a manual extra check?)

        let regEx = new RegExp("[^a-zA-Z0-9]+", "g");
        let match = password.match(regEx);
        return match ? (match.length * this._weight) : this._penalty;
    }
}