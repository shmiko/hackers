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


    function convert(in) {
        var b7 = ['0','a', 't', 'l', 's', 'i', 'n'];
        var num = in, i  = num, sNum = 0, newArray = [];
        while (i > 0){
            sNum = i%7;
            newArray.push(sNum);
            i = i/7;
        }
        console.log(newArray.reverse());
        return newArray.reverse();
    };


    convert(7;)