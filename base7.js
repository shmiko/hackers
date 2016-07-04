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
        var num = input, i = num, sNum = 0, newArray = [];
        for (var l = 0; l < input.length; l++){
            while (l > 0){
                sNum = l%7;
                newArray.push(b7[sNum]);
                l = l/7;
            }
        }
        console.log(newArray.reverse());
        return newArray.reverse();
    };


    convert(7792875);