function stringLength(string){
    let a=string.length;
    if(a===0 || a>10){
        return 'error';
        }else{
        return a;
        }
    }
module.exports  = stringLength;

