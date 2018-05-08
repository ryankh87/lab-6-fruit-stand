'use strict';
/* exported fruitStand*/

var fruitStand = [

    {
        name: 'apple',
        color: 'red',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Fall',
        image: '/images/apple.jpg',
        createLi: function() {
            console.log(`I'm a ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name}!`;

            return createListEle;
        }

    },

    {
        name: 'tangerine',
        color: 'orange',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Winter',
        image: '/images/tangerine.jpg',
        createLi: function() {
            console.log(`I'm an ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name}!`;

            return createListEle;
        }
    },

    {
        name: 'pineapple',
        color: 'yellow',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Spring',
        image: '/images/pineapple.jpg',
        createLi: function() {
            console.log(`I'm a ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name}!`;

            return createListEle;

        }
    },

    {
        name: 'fig',
        color: 'purple',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Winter',
        image: '/images/fig.jpg',
        createLi: function() {
            console.log(`I'm a ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name}!`;

            return createListEle;
        },
    }

];