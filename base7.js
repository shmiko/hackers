// public static void main(String[] args) {

//         char [] b7={'0','a', 't', 'l', 's', 'i', 'n'};
//         Scanner in = new Scanner(System.in);
//         int t = in.nextInt();

//         int i=t;
//         StringBuffer sb = new StringBuffer();
//         while (i>0){
//             int m=i%7;
//             sb.append(b7[m]);
//             i=i/7;
//         }

//         System.out.println(sb.reverse());
//         in.close();

//     }


    function convert(input) {
        var b7 = ['0','a', 't', 'l', 's', 'i', 'n'];
        var num = input, l = num, sNum = 0, newArray = [];
        //for (var l = 0; l < num.length; l++){
            console.log('num is ', num);
            while (l >= 1){
                console.log('l is ', l);
                sNum = l%7;
                // console.log('l%7 is ', l%7);
                // console.log('sNum is ', sNum);
                if (b7[sNum] != 'undefined' || b7[sNum] != undefined){
                    newArray.push(b7[sNum]);
                }
                l = l/7;
                // console.log('2nd l is ', l);
            }
        //}
       // if (newArray != 'undefined' || newArray != undefined){
            console.log('newarray is ',newArray.reverse());
        //};
        return newArray.reverse();
    };


    console.log(convert(7792875));
    console.log(convert(7));