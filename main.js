//  document.write("JavaScript say hello!");
//         console.log("JavaScript say hello!");
//         console.info("JavaScript say hello!");
//         console.error("JavaScript say hello!");
//         console.warn("JavaScript say hello!");

// var num;
// num = 10;

/////////////////2.03.2025-12:22

// var num = 10;
// num = 12;
// console.log("Variable:" + num);

// var number;
// number = true;
// number = 8;
// number = 8.8;
// number = "Stroka";

// var num_1 = 5;
// var num_2 = 10;
// var min = num_1 - num_2;

// console.log("Minus: " + (num_1 - num_2));
 
// var str1 = ("11");
// var str2 = ("Apple");
// console.log("Result: " + (str1 + str2));
// var str3 = Number("15");
// var str4 = Number("15");
// console.log("Result: " + (str3 + str4));

// console.log("Math: " + Math.PI);
// console.log("Math: " + Math.max(6, 10, 11, 25, 3, -2));
// console.log("Math: " + Math.min(6, 10, 11, 25, 3, -2));
// console.log("Math: " + Math.E);

/////////// 02.03.2025-15:37

// var number = 8;

// if(number == 5) {
//     console.log("OK");
// }else if(number < 5) {
//     console.log("5!");
// }else if(number ==7) {
//     console.log(" 7!");
// }else if(number >= 15) {
//     console.log(" =>15!");
// }else {
//     console.log("Else");
// }


// var str = "word";

// switch(str){
//     case"1":
//     console.log("Varriable is 1");
//     break;
//     case"2":
//     console.log("Varriable is 2");
//     break;
//     case"word":
//     console.log("Varriable is word");
//     break;
// }

////////03.03.2025-17:09

// arr-Array-Масив даних

// var arr = [5, 6, true, "stroka", 5.2, -100]; 
// arr[3] = "Dick"
// console.log(arr[3]);
// console.log(arr.length);
// var matrix = [
//     [3, 5, 8], ["Xuy", 2.0], [-10, 21]
// ];

// matrix[1] [0] = 90;
// console.log(matrix);


////////////03.03.2025-18:29

// for(var n = 0; n <= 10; n++) {
//     console.log(n);
// }

// console.log("---------------------------------");

// var k = 20;
// while(k >= 10) {
// console.log(k);
// k--;
// }

// console.log("---------------------------------");

// var p = 0;
// do{
// console.log(p);
// p++;
// }while(p < 50);

// console.log("---------------------------------");

// var a = 10;
// for(a; a <= 40; a += 5){
//     // if(a > 25)
//     //     break;

//     if(a % 2 == 0)
//         continue;

//     console.log(a);
// }

// console.log("---------------------------------");

// var arr = [7, 3, 12, 8, 20, 51];

// for(var l = 0; l < arr.length; l++){
//     arr[l] *= 3;
//     console.log("Element " + (l + 1) + ": " + arr[l]);
// }