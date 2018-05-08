'use strict';
/* exported fruitStand*/

var fruitStand = [

    {
        name: 'apple',
        color: 'red',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Fall',
        image: 'images/apples.jpg',
        createLi: function() {
            console.log(`I'm a ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name}!`;
            return createListEle;
        },
        showImage: function() {
            var img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }


    },

    {
        name: 'tangerine',
        color: 'orange',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Winter',
        image: 'images/tangerines.jpg',
        createLi: function() {
            console.log(`I'm an ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name}!`;

            return createListEle;
        },
        showImage: function() {
            var img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }
    },

    {
        name: 'pineapple',
        color: 'yellow',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Spring',
        image: 'images/pineapples.jpg',
        createLi: function() {
            console.log(`I'm a ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name}!`;

            return createListEle;

        },
        showImage: function() {
            var img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }
    },

    {
        name: 'fig',
        color: 'purple',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Winter',
        image: 'images/figs.jpg',
        createLi: function() {
            console.log(`I'm a ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name}!`;

            return createListEle;
        },
        showImage: function() {
            var img = document.createElement('img');
            img.setAttribute('src', this.image);
            return img;
        }
    }

];