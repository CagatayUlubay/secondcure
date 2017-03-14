class MaximumLength implements ObserverInterface {
    _name:string = "MaximumLength";
    _maximumLength:number;
    _weight:number;

    constructor(maximumLength:number, weight:number) {
        this._maximumLength = maximumLength;
        this._weight = weight;
    }

    validate(password:string) {
        return password.length <= this._maximumLength;
    }

    set name(name:string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set maximumLength(maximumLength:number) {
        this._maximumLength = maximumLength;
    }

    get maximumLength() {
        return this._maximumLength;
    }

    set weigth(weight:number) {
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }
}