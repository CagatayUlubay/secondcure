/// <reference path="../AbstractObserver.ts" />

class Dictionary extends AbstractObserver {
    _name:string = "Dictionary";
    _dictionary;

    // We get the dictionary from outside so we don't have to struggle with async behaviour to retrive the data
    constructor(dictionary = [], weight:number = 0, penalty:number = 0) {
        super();
        this._dictionary    = dictionary;
        this._weight        = weight;
        this._penalty       = penalty;
    }

    validate(password:string) {
        for (let wording in this._dictionary) {
            let regEx = new RegExp(this._dictionary[wording], "i");

            if (regEx.test(password)) {
                return this._penalty;
            }
        }

        return this._weight;
    }
}