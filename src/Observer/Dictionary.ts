/// <reference path="../AbstractObserver.ts" />

class Dictionary extends AbstractObserver {
    _name:string = "Dictionary";
    _dictionary;

    // We get the dictionary from outside so we don't have to struggle with async behaviour to retrive the data
    constructor(dictionary = [], weight:number = 0) {
        super();
        this._dictionary    = dictionary;
        this._weight        = weight;
    }

    validate(password:string) {
        for (let wording in this._dictionary) {
            let regEx = new RegExp(this._dictionary[wording], "ig");

            if (regEx.test(password)) {
                return true;
            }
        }

        return false;
    }

    score(password:string) {
        let score = 0;

        for (let wording in this._dictionary) {
            let regEx = new RegExp(this._dictionary[wording], "ig");
            let matches = password.match(regEx);

            if (matches) {
                matches.forEach(function (match) {
                    score += match.length * 2;
                })
            }
        }

        return -score;
    }
}