'use strict';
/* exported fruitStand*/

var fruitStand = [

    {
        name: 'apple',
        color: 'red',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Fall',
        image: 'apple.jpg',
        createLi: function() {
            console.log(`I'm a ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = this.taste;

            return createListEle;
        }

    },

    {
        name: 'tangerine',
        color: 'orange',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Winter',
        image: 'tangerine.jpg',
        createLi: function() {
            console.log(`I'm an ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name} are ${this.taste}`;

            return createListEle;
        }
    },

    {
        name: 'pineapple',
        color: 'yellow',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Spring',
        image: 'pineapple.jpg',
        createLi: function() {
            console.log(`I'm a ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name} are ${this.taste}`;

            return createListEle;

        }
    },

    {
        name: 'fig',
        color: 'purple',
        shape: 'round',
        taste: 'sweet',
        harvest: 'Winter',
        image: 'fig.jpg',
        createLi: function() {
            console.log(`I'm a ${this.color} ${this.name}`);
            const createListEle = document.createElement('li');
            createListEle.textContent = `${this.name} are ${this.taste}`;

            return createListEle;
        },
    }

];