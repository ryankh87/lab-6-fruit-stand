'use strict';
/* globals fruitStand */
/* exported fruitShow */

console.log('is this working?');

function fruitShow(){
    var fruit = document.getElementById('fruit-list');
    console.log(fruit);
    for(var i = 0; i < fruitStand.length; i++) {
        // console.log(fruitStand[i]);
        var createListEle = fruitStand[i].createLi();
        fruit.appendChild(createListEle);
    }
}

fruitShow();


