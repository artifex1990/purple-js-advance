'use strict';

class DB {
    save(item) {
        console.log(`Сохраняю в БД: ${item}`);
    }
}

class MongoDB extends DB {
    save(item) {
        console.log(`Сохраняю в MongoDB: ${item}`);
    }
}

class ToDoList {
    items = [1,2,3];
    db;

    constructor(db) {
        this.db = db;
    }

    saveToDB() {
        this.db.save(this.items);
    }
}

const list1 = new ToDoList(new DB());
list1.saveToDB();
const list2 = new ToDoList(new MongoDB());
list2.saveToDB();