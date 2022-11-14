// Add your Javascript codes here

let btn = document.getElementById("start_btn");
btn.addEventListener("click", clickStart);
let price = 7500;
let name = prompt("Enter name");
let age = prompt("Enter age");
discount=clickStart
    function clickStart(params) {
        let price = 7500;
let name = prompt("Enter name");
let age = prompt("Enter age");
        if (age < 15) {
            let disc = 80 / 100;
            newPrice = disc * price;
            discount = price - newPrice;
            alert("hi" + " " + name + " " + "your price is" + " " + discount);
        } else if (age > 15 && age <= 18) {
            let disc = 50 / 100;
            newPrice = disc * price;
            discount = price - newPrice;
            alert("hi" + " " + name + " " + "your price is" + " " + discount);
        } else if (age > 18 && age <= 30) {
            let disc = 40 / 100;
            newPrice = disc * price;
            discount = price - newPrice;
            alert("hi" + " " + name + " " + "your price is" + " " + discount);
        } else if (age > 30 && age <= 45) {
            let disc = 30 / 100;
            newPrice = disc * price;
            discount = price - newPrice
            alert("hi" + " " + name + " " + "your price is" + " " + discount);
        } else if (age > 45 && age <= 65) {
            let disc = 40 / 100;
            newPrice = disc * price;
            discount = price - newPrice
            alert("hi" + " " + name + " " + "your price is" + " " + discount);
        } else if (age > 65) {
            let disc = 100 / 100;
            newPrice = disc * price;
            discount = price - newPrice
            alert("hi" + " " + name + " " + "your price is" + " " + discount);
        }

    }


