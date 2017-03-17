/// <reference path="../AbstractObserver.ts" />

class MultibleOccurence extends AbstractObserver {
    _name:string = "MultibleOccurence";
    _threshold:number;

    constructor(threshold:number, weight:number = 0) {
        super();
        this._weight        = weight;
        this._threshold     = threshold;
    }

    validate(password:string) {
        let regEx = new RegExp("([a-z]{" + this._threshold + "}|[A-Z]{" + this._threshold + "}|[0-9]{" + this._threshold + "})");
        return !regEx.test(password);
    }

    set threshold(threshold:number) {
        this._threshold = threshold;
    }

    get threshold() {
        return this._threshold;
    }

    score(password:string) {
        return this._weight;
    }
}