/// <reference path="./AbstractObserver.ts" />
"use strict";
/**
 * SecondCure Password Strength Indicator
 *
 * @author      Cagatay Ulubay <caga.ulu@gmail.com>
 * @copyright   DevMonks
 * @version     0.0.0.2
 */
var SecondCure = (function () {
    function SecondCure(observer) {
        this._observer = observer;
    }
    SecondCure.prototype.validate = function (password) {
        var weight = 0;
        this._observer.forEach(function (observer) {
            var result = observer.validate(password);
            if (result) {
                weight += observer.weight;
            }
            else {
                weight -= observer.penalty;
            }
        });
        return weight;
    };
    Object.defineProperty(SecondCure.prototype, "observer", {
        get: function () {
            return this._observer;
        },
        set: function (observer) {
            this._observer = observer;
        },
        enumerable: true,
        configurable: true
    });
    return SecondCure;
}());
