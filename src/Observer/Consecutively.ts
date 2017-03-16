/// <reference path="../AbstractObserver.ts" />

class Consecutively extends AbstractObserver {
    _name:string = "Consecutively";

    constructor(weight:number = 0, penalty:number = 0) {
        super();
        this._weight = weight;
        this._penalty = penalty;
    }

    validate(password:string) {
        // Todo: Open for better solutions!
        let passToCharcode = [];

        password.split('').map(function (char) {
            passToCharcode[char] = char.charCodeAt(0);
        });

        for (let char in passToCharcode) {
            let nextChar = char.charCodeAt(0)+1;
            let prevChar = char.charCodeAt(0)-1;

            if (passToCharcode[String.fromCharCode(nextChar)] && passToCharcode[String.fromCharCode(prevChar)]) {
                return false;
            }
        }

        return true;
    }
}