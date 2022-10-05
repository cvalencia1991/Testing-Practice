function stringLength(string){
    let a= string.length;
    if (string){return a;}
    if(a>=1 && a<=10){
        throw 'error';
    }
}
module.exports  = stringLength;

