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

ls([113322]);