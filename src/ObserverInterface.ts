interface ObserverInterface {
    _name:string;
    _weight:number;
    validate(password:string);
    score(password:string);
}