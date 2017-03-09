"use strict";
/**
 * SecondCure Password Strength Indicator
 *
 * @author      Cagatay Ulubay <caga.ulu@gmail.com>
 * @copyright   DevMonks
 * @version     0.0.0.1
 */
class SecondCure {

    passwordElement;

    constructor(passwordElement) {
        this.passwordElement = passwordElement;
    }

    validate() {
        console.log(this.passwordElement);
    }
}