"use strict";
/**
 * SecondCure Password Strength Indicator
 *
 * @author      Cagatay Ulubay <caga.ulu@gmail.com>
 * @copyright   DevMonks
 * @version     0.0.0.1
 */
class SecondCure {

    _passwordElement;
    _observer;

    constructor(passwordElement) {
        this._passwordElement = passwordElement;
    }

    validate() {
        console.log(this._passwordElement);
    }

    set observer(observer) {
        this._observer = observer;
    }

    get observer() {
        return this._observer;
    }
}