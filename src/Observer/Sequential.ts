/// <reference path="../AbstractObserver.ts" />

class Sequential extends AbstractObserver {
    _name:string = "Sequential";

    constructor(weight:number = 0) {
        super();
        this._weight = weight;
    }

    validate(password:string) {
        // Todo: Open for better solutions!
        let passToCharcode = [];

        // Split the password into single characters
        password.split('').map(function (char) {
            passToCharcode.push(char.charCodeAt(0));
        });

        // This will detect ABC, but not CAB (both has a character before and after with a charcode that is one bigger and one lower)
        // But the first one is really consecutively
        for (let i = 0, iMax = passToCharcode.length; i < iMax; i++) {
            // Do a entry exists before and after the current char?
            if (passToCharcode[i-1] && passToCharcode[i+1]) {
                // Now the tricky part: Is the char before and after the charcode that is the current but 1 lower and higher
                if (passToCharcode[i-1] == passToCharcode[i]-1 && passToCharcode[i+1] == passToCharcode[i]+1) {
                    return false;
                }
            }
        }

        return true;
    }

    score(password:string) {
        let passToCharcode = [];
        let score          = 0;

        // Split the password into single characters
        password.split('').map(function (char) {
            passToCharcode.push(char.charCodeAt(0));
        });

        // This will detect ABC, but not CAB (both has a character before and after with a charcode that is one bigger and one lower)
        // But the first one is really consecutively
        for (let i = 0, iMax = passToCharcode.length; i < iMax; i++) {
            // Do a entry exists before and after the current char?
            if (passToCharcode[i-1] && passToCharcode[i+1]) {
                // Now the tricky part: Is the char before and after the charcode that is the current but 1 lower and higher
                if (passToCharcode[i-1] == passToCharcode[i]-1 && passToCharcode[i+1] == passToCharcode[i]+1) {
                    score -= this._weight;
                }
            }
        }
        return score;
    }
}