

function lookSay(digits) {
    var result = '',
        chars = (digits + ' ').split(''),
        lastChar = chars[0],
        times = 0;
 
    chars.forEach(function(nextChar) {
        if (nextChar === lastChar) {
            times++;
        }
        else {
            result += (times + '') + lastChar;
            lastChar = nextChar;
            times = 1;
        }
    });
    console.log('result is ', result)
    return result;
}
 


lookSay("33332211");


