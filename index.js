// let question = prompt("Как вас зовут?").toLowerCase().trim()
// let score = +prompt("Номер счёта?")



let name 
let money
let account
let moneyO = 10000

while (true) {
    name = prompt('Введите ваше имя:').toLowerCase().trim();
    if (name === "Alex") {
        break
    } else {
        alert("Пользователь не найден, досвидули")
    }
}
while (true) {
    account = +prompt('Введите номер вашего счета:');
    if (account === 7777) {
        break
    } else {
        alert("Пользователь не найден, досвидули")
    }
}
while (true) {
    money = +prompt('Сколько обналичить?');
    if (money >= 1 && money <= 10000) {
        alert(moneyO - money)
        break
    } 
    else {
        alert("Не достаточно средств")
    }
}







// switch (question) {
//     case name:
//         alert("Отлично!")
//         break
//     case account:
//         alert("Отлично!")
//         break
//     default:
//         alert("Пользователь не найден, досвидули")
// }


let nameA
let age
let moneyA
let question

while (true) {
    nameA = prompt('Введите ваше имя:').toLowerCase().trim();
    if (nameA[0] === "a") {
        break
    } else {
        alert("Доступ запрещён")
    }
}
while (true) {
    age = prompt('Склько вам лет?');
    if (age >= 20 && age <= 40 ) {
        break
    } else {
        alert("Доступ запрещён")
    }
}
while (true) {
    moneyA = prompt('Сколько денег у вас собой?');
    if (moneyA >= 100 ) {
        break
    } else {
        alert("Доступ запрещён")
    }
}

while (true) {
    question = prompt('Сколько вас?');
    if (question <= 5 ) {
        alert("Ecть места!")
        break
    } else {
        alert("Мест нет")
    }
}











// switch (score) {
//     case account:
//         alert("Отлично!")
//         break
//     default:
//         alert("Пользователь не найден, досвидули")
// }







// switch (score) {
//     case account:
//         alert("Отлично!")
//         break
//     default:
//         alert("Пользователь не найден, досвидули")
// }
















