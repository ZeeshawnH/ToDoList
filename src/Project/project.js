import { Item } from "./item";

export class Project {

    /**
     * Creates a new project task list
     * @param {String} name the name of the project
     */
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    /**
     * Helper method used to find task with given item name
     * @param {String} itemName the name of the task to find
     * @returns the index of the task for the given item name
     */
    findItem(itemName) {
        return this.items.findIndex((item) => item.getName === itemName);
    }

    /**
     * 
     * @returns the name of the project
     */
    getName() {
        return this.name;
    }

    /**
     * Adds a to-do item to the task list
     * @param {Item} item a to-do item
     */
    addItem(item) {
        this.items.push(item);
    }

    /**
     * 
     * @returns the list of tasks
     */
    getItems() {
        return this.items;
    }
}