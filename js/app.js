'use strict';
/* globals fruitStand */
/* exported fruitShow */

function fruitShow(){
    var fruit = document.getElementById('fruit-list');
    console.log(fruit);
    for(var i = 0; i < fruitStand.length; i++) {
        var createListEle = fruitStand[i].createLi();
        fruit.appendChild(createListEle);
        var genImg = fruitStand[i].showImage();
        fruit.appendChild(genImg);
    }
}

fruitShow();


