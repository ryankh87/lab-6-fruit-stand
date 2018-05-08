'use strict';
/* globals fruitStand */
/* exported fruitShow */

function fruitShow(){
    var fruit = document.getElementById('fruit-list');
    for(var i = 0; i < fruitStand.length; i++) {
        var createListEle = fruitStand[i].createLi();
        fruit.appendChild(createListEle);


    }
}



