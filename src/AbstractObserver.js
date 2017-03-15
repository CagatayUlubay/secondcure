var AbstractObserver = (function () {
    function AbstractObserver() {
        this._weight = 0;
        this._penalty = 0;
    }
    Object.defineProperty(AbstractObserver.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AbstractObserver.prototype, "penalty", {
        get: function () {
            return this._penalty;
        },
        set: function (penalty) {
            this._penalty = penalty;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AbstractObserver.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractObserver;
}());
