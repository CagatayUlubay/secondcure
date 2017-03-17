/// <reference path="../AbstractObserver.ts" />

class MinimumLength extends AbstractObserver {
    _name:string = "MinimumLength";
    _mininumLength:number;

    constructor(minimumLength:number, weight:number = 0) {
        super();
        this._mininumLength = minimumLength;
        this._weight        = weight;
    }

    validate(password:string) {
        return password.length >= this._mininumLength;
    }

    set minimumLength(minimumLength:number) {
        this._mininumLength = minimumLength;
    }

    get minimumLength() {
        return this._mininumLength;
    }

    score(password:string) {
        return password.length * this._weight;
    }
}