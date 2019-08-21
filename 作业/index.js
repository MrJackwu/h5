    // var userInput1 = parseInt(prompt("请输入第一个数字"));
    // var userInput2 = parseInt(prompt("请输入第二个数字"));
    // var userInput3 = parseInt(prompt("请输入第三个数字"));
    // // if (isNaN(userInput1) == false) {
    // //     if (isNaN(userInput2) == false) {
    // //         if (isNaN(userInput3) == false) {
    // //              console.log("两次输出的数字相加的和减去第3个数" + (userInput1 + userInput2 - userInput3));
    // //         }
           
    // //     }
    // // }
    // if (!isNaN(userInput1) && !isNaN(userInput2) && !isNaN(userInput3)) {
    //     console.log("前两个数相加减第三个数乘第四个数的和是" + (userInput1 + userInput2 - userInput3));
    // }
//    var a = Math.pow(3,2 + Math.pow(3,6));
//    console.log(a);
// 一
//     var a1 = 123 + 45 * 78;
//     var a2 = 34 + 543;
//     var a3 = 9 - (324 - 34);
//     console.log(a1 / a2 -a3);
// 二
        // var sheshidu = parseFloat(prompt("请输入摄氏度"));
        // var huasheshidu = 9 / 5 * sheshidu + 32;
        // alert("你好，华摄氏度是" + huasheshidu + "\n")
//三
        // var a = Math.pow((23 + Math.pow(5,7) / 45,2));
        // console.log(a);
//四
        // var a = parseFloat(prompt("请输入六边形的长"));
        // var s = 3 * Math.sqrt(3) / 2 * Math.pow(a, 2);
        // console.log("六边形的面积是" + s);
//五 如果今天是星期二，那么1000天后是星期几？用户输入一个天数，计算这个天数后是星期几。
        // var a = parseFloat(prompt("请输入一个天数"));
        // a = 1000;
        // var b = (2 + a % 7) % 7;
        // console.log(b);
    

    // var userInput = parseInt(prompt("请输入一个三位数"));
    // if (!isNaN(userInput)) {
    //     if (userInput >= 100 && userInput <= 999) {
    //         //123
    //        var bai = parseInt(userInput /100);
    //        var shi = parseInt((userInput %100) / 10);
    //        var ge = userInput %10;
    //        console.log("这三位数的每个位的数的和是" + (bai + shi + ge));
    //     }
    // } 

        // var userInput parseInt(prompt("请输入一个五位数"));
        // if (!inNaN(userInup)) {
        //     if (userInput >= 10000 && userInput <= 99999) {
        //         var wan =
        //         var qian = 
        //         var bai =
        //         var shi = 
        //         var ge =
        //     }
        // }
            //第一题
            // var a = parseInt(prompt("请输入一个数字"));
            // if (a % 5 ==0 && a % 6==0) {
            //     alert("这个数既能被5整除，又能被6整除");
            // }else if(a % 5 == 0 && a % 6 !=0 ){
            //     alert("这个数能被5整除，但不能被6整除");
            // }else if(a % 5 != 0 && a % 6 ==0){
            //     alert("这个数不能被5整除，但能被6整除");
            // }else if(a % 5 !=0 && a % 6 != 0){
            //     alert("这个数既不能被5整除，又不能被6整除");
            // }
            //第二题
            // var a = parseInt(prompt("请输入一个数字"));
            // var b = parseInt(prompt("请输入第二个数字"));
            // if (a % 2 == b % 2 ) {
            //     alert("这两个奇偶数性相同");
            // }else{
            //     alert("这两个奇偶性不同");
            // }
            //第三题
            // ① 非整百年数除以4，无余为闰，有余不闰；
            // ② 整百年数除以400，无余为闰，有余不闰。
            // var a = parseInt(prompt("请输入年份"));
            // if (a % 100 == 0 && a % 400 ==0 || a % 100 != 0 && a % 4 == 0) {
            //     alert("该年是闰年");
            // }else{
            //     alert("该年不是闰年");
            // }
            //第四题
            var a = parseInt(prompt("请输入工作时长"));
            var b = parseInt(prompt("请输入你的月薪"));
            if (a == 0) {
                if (b > 8000) {
                    xinshui = 1.2;
                }else{
                    xinshui = 1;
                }
            }else if (a == 1) {
                if (b > 10000) {
                    xinshui= 1.7;
                }else{
                    xinshui = 1.5;
                }
            }else if (a == 2) {
                    if (b > 12000) {
                        xinshui = 3.2;
                    }else{
                        xinshui = 3;
                    }
                }
            alert(xinshui*b);