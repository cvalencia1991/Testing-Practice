function reverseString(string) {
    let splitstring = string.split("");
     let reversearray = splitstring.reverse();
     let reverstrng = reversearray.join("");
     return reverstrng;
 }
 module.exports = reverseString;