// // cấu trúc for
// for (let i = 0; i < 10; i++) {
//     //khối code thực thi thỏa mãn điều kiện vòng lập

// }

// //hiển thị 100 số tự nhiên đàua tiên
// for (i = 0; i < 100; i++) {
//     console.log(`so tu nhien thu ${i + 1} la ${i}`);

// }

// let count = 1;
// for (let i = 2; i < 100; i = i + 2) {
//     console.log("so lan lap " + count)
//     count++;
// }


// kết hợp vào html để thay đổi nội udng cuar 1 thẻ html
// lấy ra thẻ tbody thông qua id
// let tbody = document.getElementById("table-body");
// console.log(tbody);
// tbody.innerHTML = "<tr><td>5x1=5</td></tr>"
//     + "<tr><td>5x2=10</td></tr>"
//     + "<tr><td>5x3=15</td></tr>"
//     + "<tr><td>5x4=20</td></tr>"
//     + "<tr><td>5x5=25</td></tr>"
//     + "<tr><td>5x6=30</td></tr>"
//     + "<tr><td>5x7=35</td></tr>"
//     + "<tr><td>5x8=40</td></tr>"
//     + "<tr><td>5x9=45</td></tr>"
//     + "<tr><td>5x10=50</td></tr>";


// let box = document.getElementById("box");
// box.innerText = "Day la noi dung cua box";




// let str = "";
// for (let i = 1; i <= 10; i++) {
//     str = str + `<tr><td> 5x ${i}= ${i * 5}</td></tr>`

// }
// tbody.innerHTML = str;

// let str = 0
// for (i = 1; i <= 100; i++) {
//     str = +str + i;
// }
// document.write(`Tong 100 so tu nhien cong lai la: ${str}`)


// let n = +prompt(`nhap so a vao:`);
// let Tong = 0;
// if (n > 0) {
//     for (let i = 1; i <= n; i++) {
//         Tong = Tong + i;
//     }
// }
// document.write(`${Tong}`)




//cấu trúc lặp ưhile va do ... wile
//cho phesp nhaajp ddeen khi nhaajp so 0 thi dung lai
//khoi tao sum
// let sum = 0;
// let n = 1;
// while (n != 1) {
//     //khối thực thi
//     n = +prompt(`nhap vao so n:`)
// }


// cấu trúc lập do ... while
// let n;
// do {
//     //thực thi khối lệnh
//     n = +prompt("nhap vao 1 so")
// } while (n !== 0); //n=0 => điều kiện while bị sai =>không thực thi khối lệnh thoát khỏi


// breack , continue
// breack giúp dừng và thoát khỏi vòng lập ngay lập tức
// for (let i = 1; i < 10; i++) {
//     if (i % 2 == 1) {

//         continue; //bỏ qua điều kiện vẫn thực thi
//     }
//     console.log(i);
// }

//cho phep nhap den khi nhap so 0 thi dung lai
// while (true) {
//     let n = +prompt(`Nhap vao 1 so bat ki`);
//     if (n == 0) {
//         break;// đạt điều kiện dừng lại
//     }
// }



// for (let i = 1; i < 10; i++){
//     //i chay tu 1 den 9 -> bang cuu chuong
//     for (let j = 1; j <= 10; j++){
//         // voi moi gia tri  thi j chay tu 1->10 // cac phep nhan tuw 1-10
//     }
// }



// in bang cuu chuong

let tbody = document.getElementById("table-body");
console.log(tbody);
// let therad = document.getElementById("table-head")
// console.log(therad)

// let str = "";
// let x;

let ths = "";
for (let i = 1; i <= 9; i++) {
    ths = ths + `<th>${i}x</th>`

}
document.getElementById("table-head").innerHTML = `<tr>${ths}</tr>`


let trs = "";
for (let i = 1; i <= 10; i++) {
    let tds = "";
    for (let j = 1; j <= 9; j++) {

        tds = tds + `<td>${j} x ${i}=${i * j}</td>`
    }
    trs = trs + `<tr>${tds}</tr>`
}
tbody.innerHTML = trs;

