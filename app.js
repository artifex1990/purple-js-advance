'use strict';

class Enemy {
    health;

    constructor(health = 100) {
        this.health = health;
    }

    receiveDamage(damage) {
        this.health -= damage;
        console.log(this.health);
    }
}

class Sword {
    #damage;
    constructor(damage = 10) {
        this.#damage = damage;
    }

    strike(enemy) {
        enemy.receiveDamage(this.#damage);
    }
}

class Orc extends Enemy {
    constructor(health) {
        super(health);
    }

    receiveDamage(damage) {
        if (Math.random() >  0.5) {
             this.health -= damage;
        }
       
        console.log(this.health);
    }  
}

const orc = new Orc(10);
const sword = new Sword(3);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
console.log(orc.health);