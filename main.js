// 1-masala
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// 2-masala
// for (let i = 20; i >= 1; i--) {
//   console.log(i);
// }
// 3-masala
// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
// 4-masala
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// 5-masala
// for (let i = 10; i <=100; i++) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
// }
// 6-masala
// let yigindi = 0;

// for (let i = 1; i <= 20; i++) {
//   yigindi = yigindi + i; // Qisqacha: yigindi += i; deb yozish ham mumkin
// }

// console.log("Yig'indi:", yigindi);
// // 7-masala
// for (let i = 1; i <=50; i++) {
//     if (i % 5===0)
//   yigindi = yigindi + i; // Qisqacha: yigindi += i; deb yozish ham mumkin
// }

// console.log("Yig'indi:", yigindi);
// 8-masala
// let yigindi = 0; // 1. O'zgaruvchini e'lon qilish shart!

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         yigindi = yigindi + i; 
//     } // if ning qavsi yopildi
// } // for ning qavsi yopildi

// console.log("Yig'indi:", yigindi);
// 9-masala
// let yigindi = 0;

// for (let i = 1; i <= 20; i++) {
//     // Agar son 2 ga qoldiqsiz bo'linsa (juft bo'lsa)
//     if (i % 2 === 0) {
//         yigindi += yigindi + i; // yig'indiga qo'shamiz (yoki yigindi += i)
//     }
// }

// console.log("1 dan 20 gacha bo'lgan juft sonlar yig'indisi: " + yigindi);
// 10-masala
// let yigindi = 0;

// for (let i = 3; i <= 30; i++) {
//     if (i % 3=== 0) {
//         yigindi += yigindi + i; // yig'indiga qo'shamiz (yoki yigindi += i)
//     }
// }

// console.log("1 dan 30 gacha bo'lgan juft sonlar yig'indisi: " + yigindi);
// 11-masala
// let sanagich = 0;

// for (let i = 1; i <= 200; i++) {
//     // Agar son 5 ga qoldiqsiz bo'linsa
//     if (i % 5 === 0) {
//         sanagich++; // sanagichni 1 taga ko'paytiramiz
//     }
// }

// console.log("1 dan 200 gacha 5 ga bo'linadigan sonlar soni: " + sanagich);
// 12-masala
// let sanagich = 0; // Nechtaligini sanab borish uchun o'zgaruvchi

// for (let i = 1; i <= 100; i++) {
//     // Agar son ham 3 ga, ham 5 ga qoldiqsiz bo'linsa
//     if (i % 3 === 0 && i % 5 === 0) {
//         sanagich++;
//         console.log(i); // Qaysi sonlar ekanini konsolga chiqarish
//     }
// }

// console.log("Jami:", sanagich, "ta son 3 ga ham, 5 ga ham bo'linadi.");
// 13-masala
// let sanagich = 0;
// for (let i = 1; i <= 100; i++) {
    
//     if (i % 7 === 0) {
//         sanagich++;
//         console.log(i); // Qaysi sonlar ekanini konsolga chiqarish
//     }
// }

// console.log("7 ga bo`linadigan sonlar");
// 14-masala
// let juftYigindi = 0; // Juft sonlar yig'indisi uchun
// let toqYigindi = 0;  // Toq sonlar yig'indisi uchun

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         // Agar son juft bo'lsa
//         juftYigindi += i;
//     } else {
//         // Agar son toq bo'lsa
//         toqYigindi += i;
//     }
// }

// // Yig'indilar orasidagi farqni topamiz (Math.abs manfiy chiqib qolishining oldini oladi)
// let farq = Math.abs(juftYigindi - toqYigindi);

// console.log("Juft sonlar yig'indisi:", juftYigindi);
// console.log("Toq sonlar yig'indisi:", toqYigindi);
// console.log("Ularning orasidagi farq:", farq);
// 15-masala
// let bolinadiganlarSoni = 0;   // 3 ga bo'linadiganlar uchun sanagich
// let bolinmaydiganlarSoni = 0; // 3 ga bo'linmaydiganlar uchun sanagich

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         // Agar son 3 ga qoldiqsiz bo'linsa
//         bolinadiganlarSoni++;
//     } else {
//         // Agar son 3 ga bo'linmasa
//         bolinmaydiganlarSoni++;
//     }
// }

// console.log("3 ga bo'linadigan sonlar soni:", bolinadiganlarSoni, "ta");
// console.log("3 ga bo'linmaydigan sonlar soni:", bolinmaydiganlarSoni, "ta");
// 16-masala
// let son = 5; 
// // Sikl foydalanuvchi kiritgan sondan boshlanadi, 1 dan katta yoki teng bo'lguncha kamayib boradi
// for (let i = son; i >= 1; i--) {
//     console.log(i); // Har bir sonni konsolga chiqarish
// }
// 17-masala
// let son = 10; 

// for (let i = 1; i <= son; i++) {
//     // Agar son juft bo'lsa (2 ga qoldiqsiz bo'linsa)
//     if (i % 2 === 0) {
//         console.log(i); // Juft sonni konsolga chiqaramiz
//     }
// }
// 18-masala
// let son = 7; // Foydalanuvchi kiritgan son (buni o'zgartirib sinab ko'rishingiz mumkin)
// let yigindi = 0; // Toq sonlar yig'indisini saqlab borish uchun o'zgaruvchi

// for (let i = 1; i <= son; i++) {
//     // Agar son toq bo'lsa (2 ga bo'lganda qoldiq 1 qolsa)
//     if (i % 2 !== 0) {
//         yigindi += i; // Yig'indiga qo'shib boramiz
//         console.log(i); // Qaysi toq sonlar qo'shilayotganini ko'rish uchun
//     }
// }

// console.log("1 dan", son, "gacha bo'lgan toq sonlar yig'indisi:", yigindi);
// 19-masala
// let son = 5; // Foydalanuvchi kiritgan son (buni istalgan songa o'zgartirishingiz mumkin)

// for (let i = 1; i <= 10; i++) {
//     let natija = son * i;
//     // Template literal (``) yordamida chiroyli qilib chiqaramiz
//     console.log(`${son} x ${i} = ${natija}`);
// }
// 20-masala
// let son = 5; // Tekshiriladigan son (buni o'zgartirib sinab ko'rishingiz mumkin)
// let tub = true; // Boshida sonni tub deb taxmin qilamiz

// // 1 tub son emas
// if (son <= 1) {
//     tub = false;
// } else {
//     // 2 dan boshlab sonning o'zigacha bo'lgan barcha sonlarga bo'lib tekshiramiz
//     for (let i = 2; i < son; i++) {
//         if (son % i === 0) {
//             tub = false; // Agar qoldiqsiz bo'linsa, demak tub emas
//             break;      // Siklni to'xtatamiz
//         }
//     }
// }

// // Natijani chiqarish
// if (tub) {
//     console.log(son, "— tub son.");
// } else {
//     console.log(son, "— tub son emas.");
// }