/// <reference path="./AbstractObserver.ts" />
"use strict";
/**
 * SecondCure Password Strength Indicator
 *
 * @author      Cagatay Ulubay <caga.ulu@gmail.com>
 * @copyright   DevMonks
 * @version     0.0.0.2
 */
class SecondCure {

    _observer:AbstractObserver[];

    constructor(observer:AbstractObserver[]) {
        this._observer = observer;
    }

    validate(password:string) {

        let weight = 0;

        this._observer.forEach((observer) => {
            let result = observer.validate(password);

            if (result) {
                weight += observer.weight;
            } else {
                weight -= observer.penalty;
            }

            console.log(observer.name, "Weight: " , observer.weight, "Penalty: ", observer.penalty);
        });

        return weight;
    }

    set observer(observer:AbstractObserver[]) {
        this._observer = observer;
    }

    get observer() : AbstractObserver[] {
        return this._observer;
    }
}