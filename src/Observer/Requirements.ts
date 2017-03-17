/// <reference path="../AbstractObserver.ts" />

class Requirements extends AbstractObserver {
    _name:string = "Requirements";
    _requirements:AbstractObserver[];
    _tolerance:number;

    constructor(requirements:AbstractObserver[], weight:number = 0, tolerance:number = 100) {
        super();
        this._weight        = weight;
        this._requirements  = requirements;
        this._tolerance     = tolerance;
    }

    validate(password:string) {

        let successValidation = [];

        this._requirements.forEach(function (observer) {
            if (observer.validate(password)) {
                successValidation.push(observer);
            }
        });

        // if at least {tolerance} % of the requirements is valid, the whole requirements are valid
        return successValidation.length >= ((this._requirements.length / 100) * this._tolerance);
    }

    set requirements(requirements:AbstractObserver[]) {
        this._requirements = requirements;
    }

    get requirements() {
        return this._requirements;
    }

    set tolerance(tolerance:number) {
        this._tolerance = tolerance;
    }

    score(password:string) {
        return this._requirements.length * this._weight;
    }
}