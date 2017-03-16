/// <reference path="../AbstractObserver.ts" />

class MaximumLength extends AbstractObserver {
    _name:string = "MaximumLength";
    _maximumLength:number;

    constructor(maximumLength:number, weight:number = 0, penalty:number = 0) {
        super();
        this._maximumLength = maximumLength;
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        return password.length <= this._maximumLength ? this._weight : this._penalty;
    }

    set maximumLength(maximumLength:number) {
        this._maximumLength = maximumLength;
    }

    get maximumLength() {
        return this._maximumLength;
    }
}