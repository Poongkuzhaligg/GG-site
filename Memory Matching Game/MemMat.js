
// const items = [ [{x1}, {x2}, {x3}, {x4}],
// [{x5}, {x6}, {x7}, {x8}], [{x9}, {x10}, {x11}, {x12}], [{x13}, {x14}, {x15}, {x16}] ];
 var cell = {
     1: "./candy.png",
     2: "./cottoncandy.png",
     3: "./lolipop.png",
     4: "./cane.png",
     5: "./jelly.png",
     6: "./corn.png",
     7: "./candy.png",
     8: "./choco.webp",
     9: "./heartcandy.png",
     10: "./lolipop.png",
     11: "./jelly.png",
     12: "./cane.png",
     13: "./cottoncandy.png",
     14: "./corn.png",
     15: "./choco.webp",
     16: "./heartcandy.png"
 }

function image (x) {
    
    // var cell = {
    //     1: "./candy.png"
    // };
// console.log(x);
// console.log(cell);
var clcard = 'img-'+x;
document.getElementById( clcard ).src = cell[x];
}

// function image1() {
//     var x1 = document.getElementById("img-1").src="./candy.png";
// }
// function image2() {
//     var x2 = document.getElementById("img-2").src="./cottoncandy.png";
// }
// function image3() {
//     var x3 = document.getElementById("img-3").src="./lolipop.png";
// }
// function image4() {
//     var x4 = document.getElementById("img-4").src="./cane.png";
// }
// function image5() {
//     var x5 = document.getElementById("img-5").src="./jelly.png";
// }
// function image6() {
//     var x6 = document.getElementById("img-6").src="./corn.png";
// }
// function image7() {
//     var x7 = document.getElementById("img-7").src="./candy.png";
// }
// function image8() {
//     var x8 = document.getElementById("img-8").src="./choco.webp";
// }
// function image9() {
//     var x9 = document.getElementById("img-9").src="./heartcandy.png";
// }
// function image10() {
//     var x10 = document.getElementById("img-10").src="./lolipop.png";
// }
// function image11() {
//     var x11 = document.getElementById("img-11").src="./jelly.png";
// }
// function image12() {
//     var x12 = document.getElementById("img-12").src="./cane.png";
// }
// function image13() {
//     var x13 = document.getElementById("img-13").src="./cottoncandy.png";
// }
// function image14() {
//     var x14 = document.getElementById("img-14").src="./corn.png";
// }
// function image15() {
//     var x15 = document.getElementById("img-15").src="./choco.webp";
// }
// function image16() {
//     var x16 = document.getElementById("img-16").src="./heartcandy.png";
// }

