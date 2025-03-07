'use strict';

class Enemy {
    #health;

    constructor(health = 100) {
        this.#health = health;
    }

    get health() {
        return this.#health;
    }

    receiveDamage(damage) {
        if (this.health < damage) {
            return;
        }
        this.#health -= damage;
    }
}
class Orc extends Enemy {
    #damageCounter = 0;

    constructor(health) {
        super(health);
    }

    receiveDamage(damage) {
        this.#damageCounter++;
        if (this.#damageCounter % 2 === 0) {
            return;
        }
        super.receiveDamage(damage);
    }
}
class Sword {
    #damage = 10;

    strike(enemy) {
        enemy.receiveDamage(this.#damage);
    }
}

const orc = new Orc();
const sword = new Sword();
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
sword.strike(orc);
console.log(orc.health);