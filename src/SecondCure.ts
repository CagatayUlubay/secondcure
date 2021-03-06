/// <reference path="./AbstractObserver.ts" />
"use strict";
/**
 * SecondCure Password Strength Indicator
 *
 * @author      Cagatay Ulubay <caga.ulu@gmail.com>
 * @copyright   DevMonks
 * @version     0.0.1.0
 */
class SecondCure {

    _observer:AbstractObserver[];

    constructor(observer:AbstractObserver[]) {
        this._observer = observer;
    }

    validate(password:string) {

        if (password.length === 0) {
            return 0;
        }

        let weight = 0;

        this._observer.forEach((observer) => {
            if (observer.validate(password)) {
                weight += observer.score(password);
            }
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