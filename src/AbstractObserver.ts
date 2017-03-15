/// <reference path="./ObserverInterface.ts" />
abstract class AbstractObserver implements ObserverInterface {
    _name:string;
    _weight:number = 0;
    _penalty:number = 0;
    constructor() {}
    get weight():number {
        return this._weight;
    };
    set weight(weight:number) {
        this._weight = weight;
    }
    get penalty():number {
        return this._penalty;
    };
    set penalty(penalty:number) {
        this._penalty = penalty;
    }
    get name():string {
        return this._name;
    }
    set name(name:string) {
        this._name = name;
    }
    abstract validate(password:string);
}