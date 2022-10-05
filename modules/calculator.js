
class calculator{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    add(x,y){
        return x+y;
    }
    substract(x,y){
        return x-y;
    }
    divide(x,y){
        return x/y;
    }
    multiply(x,y){
        return x*y;
    }
}
module.exports = calculator;