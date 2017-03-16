/// <reference path="../AbstractObserver.ts" />

class MinimumLength extends AbstractObserver {
    _name:string = "MinimumLength";
    _mininumLength:number;

    constructor(minimumLength:number, weight:number = 0, penalty:number = 0) {
        super();
        this._mininumLength = minimumLength;
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        return password.length >= this._mininumLength ? this._weight : this._penalty;
    }

    set minimumLength(minimumLength:number) {
        this._mininumLength = minimumLength;
    }

    get minimumLength() {
        return this._mininumLength;
    }
}