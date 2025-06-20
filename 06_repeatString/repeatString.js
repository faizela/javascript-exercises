const repeatString = function(string, num) {
    // input str, num eg hey, 3  => heyheyhey
    let newstr = ''
    if (num < 0) {return 'ERROR'}
    while (num !== 0) {
        newstr += string
        num--
    }
    return newstr

};

// Do not edit below this line
module.exports = repeatString;
