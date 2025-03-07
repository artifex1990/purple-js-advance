'use strict';

const task = {
    title: 'Task',
    dueTo: new Date('2023/01/01'),

    get isOverdue() {
        return this.dueTo < new Date();
    },

    set isOverdue(isOverdueTask) {
        if (!isOverdueTask) {
            this.dueTo = new Date();
        }
    }
}

console.log(task.isOverdue);
task.isOverdue = false;
console.log(task);
console.log(task.isOverdue);


class Task {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    get isOverdue() {
        return this.dueDate < new Date();
    }

    set dueDate(date) {
        if (date < new Date()) {
            return;
        }
        this._dueDate = date;
    }
}

const newTask = new Task('Task2', new Date('2027/01/01'));
//console.log(newTask.dueDate = new Date('2024/01/01'));
console.log(newTask);
// console.log(newTask.isOverdue);