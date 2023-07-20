import { Date } from "date-fns";

/**
 * Contains the information for each to-do item
 */
export class Item {

    /**
     * Constructs an Item instance, storing all information regarding the item
     * Sets completed to false by default
     * @param {String} title the name of the to-do item
     * @param {String} description a custom description for the to-do item
     * @param {Date} dueDate the date the item should be completed
     * @param {Number} priority the importance of the item on a scale from 1-3 (1 being lowest, 3 being highest priority)
     */
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    /**
     * Completes the to-do item
     */
    complete() {
        completed = true;
    }

    /**
     * 
     * @returns the item's title
     */
    getTitle() {
        return this.title;
    }

    /**
     * 
     * @returns the item's description
     */
    getDescription() {
        return this.description;
    }

    /**
     * Retrieves the month, day, and year values from the date-fns date and assembles a string from them
     * @returns the date in MM/DD/YYYY format from the due date value
     */
    getDueDate() {
        day = getDate(this.dueDate);
        month = getMonth(this.dueDate);
        year = getYear(this.dueDate);
        return `${month}/${day}/${year}`;
    }

    /**
     * 
     * @returns whether the item has been completed
     */
    getCompleted() {
        return this.completed;
    }
}