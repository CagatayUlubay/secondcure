/// <reference path="../AbstractObserver.ts" />

class MaximumLength extends AbstractObserver {
    _name:string = "MaximumLength";
    _maximumLength:number;

    constructor(maximumLength:number, weight:number = 0) {
        super();
        this._maximumLength = maximumLength;
        this._weight        = weight;
    }

    validate(password:string) {
        return password.length <= this._maximumLength;
    }

    set maximumLength(maximumLength:number) {
        this._maximumLength = maximumLength;
    }

    get maximumLength() {
        return this._maximumLength;
    }

    score(password:string) {
        return this._weight;
    }
}