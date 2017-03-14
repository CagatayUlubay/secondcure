"use strict";
/**
 * SecondCure Password Strength Indicator
 *
 * @author      Cagatay Ulubay <caga.ulu@gmail.com>
 * @copyright   DevMonks
 * @version     0.0.0.2
 */
class SecondCure {

    _observer:ObserverInterface[];

    constructor(observer:ObserverInterface[]) {
        this._observer = observer;
    }

    validate(password:string) {

        let weight = 0;

        this._observer.forEach((observer) => {
            let result = observer.validate(password);
            if (result) {
                weight += observer.weight;
            } else {
                weight -= observer.weight;
            }
        });

        return weight;
    }

    set observer(observer:ObserverInterface[]) {
        this._observer = observer;
    }

    get observer() : ObserverInterface[] {
        return this._observer;
    }
}