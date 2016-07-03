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