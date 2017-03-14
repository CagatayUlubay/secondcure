class MinimumLength implements ObserverInterface {
    _name:string = "MinimumLength";
    _mininumLength:number;
    _weight:number;

    constructor(minimumLength:number, weight:number) {
        this._mininumLength = minimumLength;
        this._weight = weight
    }

    validate(password:string) {
        return password.length >= this._mininumLength;
    }

    set name(name:string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set minimumLength(minimumLength:number) {
        this._mininumLength = minimumLength;
    }

    get minimumLength() {
        return this._mininumLength;
    }

    set weigth(weight:number) {
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }
}