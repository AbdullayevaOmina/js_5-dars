// -----------------------------------------  1-masala: revers string
// let str = prompt("So'z kiriting");
// let new_str = ""
// for (let i = str.length-1; i >=0; i--) {
// 	new_str += str[i]
// }
// alert(new_str);

// -----------------------------------------  2-masala: revers number
// let str = prompt("Son kiriting");
// let new_str = ""
// for (let i = str.length-1; i >=0; i--) {
// 	new_str += str[i]
// }
// alert(String(new_str));

// -----------------------------------------  3-masala: Juft yoki Toq
// let num = +prompt("Son kiriritng");
// for (let i = 0; i < num; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i + " juft");
// 	} else {
//     console.log(i + " toq");
// 	}
// }

// -----------------------------------------  4-masala: Tub sonlar
// let num = +prompt("Son kiriritng");
// for (let i = 3; i < num; i++) {
//   let count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
// 			count = count + 1;
// 			console.log(count)
//     }
//   }
// 	if (count > 2) {
// 		console.log(i + " -> murakkab");
// 	} else {
// 		console.log(i + " -> tub");
// 	}
// 	count = 0;
// }

// -----------------------------------------  5-masala: Mukammal sonmi?

// let num = +prompt("Son kiriting:");

// for (let i = 1; i <= num; i++) {
//   let sum = 0;

//   for (let j = 1; j < i; j++) {
//     if (i % j === 0) {
//       sum += j;
//     }
//   }

//   if (sum === i) {
//     console.log(i + " -> Mukammal son");
//   }	else {
// 	    console.log(i + " -> Yo'q");
// 	}
// }


// -----------------------------------------  6-masala: songi yig'indi

// -----------------------------------------  7-masala: Berilgaelemnt nechamarta qatnashgan

// -----------------------------------------  8-masala:







// misol-1
// let num = 12345;
// let songi_son = 0;
// let t = true;

// while (t) {
//   num = String(num);

//   if (num.length === 1) {
//     t = false;
//   } else {
//     songi_son = 0;

//     for (let i = 0; i < num.length; i++) {
//       songi_son += +num[i];
//     }
//     num = songi_son;
//   }
// }
// console.log(songi_son);


// misol-2
// let arr = [12, 3, 4, 8, 3, 55, 8, 8, 3, 21, 7];
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 !== 0) {
// 		sum += arr[i];
// 	}
// }

// misol-3
// let arr = [12, 3, 4, 8, 3, 100, 55, 8, 8, 3, 21, 7];
// let max_num = 0;

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > max_num) {
// 		max_num = arr[i];
// 	}
// }

// console.log(max_num);