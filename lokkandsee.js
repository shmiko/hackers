function lookAndSay(seq){
    var prev = seq[0];
    var freq = 0;
    var output = [];
    seq.forEach(function(s){
        if (s==prev){
            freq++;
        }
        else{
            output.push(prev);
            output.push(freq);
            prev = s;
            freq = 1;
        }
    });
    output.push(prev);
    output.push(freq);
    console.log(output);
    return output;
}

// Sample: try on the first 11 sequences
var seq = [1];
for (var n=0; n<11; n++){
    seq = lookAndSay(seq);
}

lookAndSay([11223]);


var hh=0;
function ls(j,j1)
{
     var l1=j.length;
     var fer=j.split('');
     var str='';
     var counter=1;
     for(var t=0;t<fer.length;t++)
     { 
         if(fer[t]==fer[t+1])
            {
                   counter++;            
            }
            else
            {
                   str=str+""+""+fer[t]+counter;
                     counter=1;
            }    
    }
    console.log("str is ",str);
    while(hh<5)   //REPLACE THE NUMBER HERE TO CHANGE NUMBER OF COUNTS!
    {
         hh++;
         //console.log(hh);
         ls(str);
    }
}

// ls([113322]);


/* 
    Look and say sequence
    11
    21
    1211
    111221
    312211
    13112221
    1113213211
    31131211131221
    13211311123113112211
    11131221133112132113212221

*/

function LookAndSay(str){
    return str.replace(/(.)\1*/g, function(seq, p1){return seq.length.toString() + p1});
}

var num = "1";
for (var i = 10; i > 0; i--) {
    num = LookAndSay(num);
}


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
 
    return result;
}
 
(function output(seed, iterations) {
    for (var i = 0; i < iterations; i++) {
        console.log(seed);
        seed = lookSay(seed);
    }
})("1", 10);



lookSay("33332211");