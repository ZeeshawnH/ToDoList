import { listItem } from "./itemUI";
import { Item } from "../Project/item";
import { format, parse } from "date-fns";

/**
 * Creates the ul element displaying the list of tasks to complete
 * Adds the element representing the new item button to the list
 * @returns html ul element representing the list of tasks
 */
export const list = (project) => {
    const list = Object.assign(document.createElement("ul"), {
        className: "list"
    });

    list.appendChild(listItem(new Item("Parent", "", new Date(2023, 2, 21), 2)));

    list.appendChild(newItem());

    for (let i = 0; i < project.getItems(); i++) {
        list.appendChild(listItem(project.getItems()[i]));
    }

    return list;
}

export const title = (text) => {
    const title = Object.assign(document.createElement("div"), {
        className: "project-title",
        innerText: text
    });
    
    return title;
}

/**
 * List item used to add new items to the list
 * Clicking on it opens a form to add the new items
 * @returns the div element allowing the user to add a new task to the list
 */
const newItem = () => {

    const newItem = Object.assign(document.createElement("div"), {
        className: "item"
    });

    // "+ Add new item display"
    const container = addItem();
    newItem.appendChild(container);

    // Add item form
    const itemForm = form();
    itemForm.classList.toggle("hidden");
    newItem.appendChild(itemForm);

    // Event listener
    newItem.addEventListener("click", () => {
        newItem.classList.toggle("new");
        container.classList.toggle("hidden");
        itemForm.classList.toggle("hidden");
    });
    
    return newItem;
};

/**
 * Creates a span containing a plus sign and the text for the new item button
 * @returns the span containing the text for the new item button
 */
const addItem = () => {
    const container = document.createElement("span");

    const plus = Object.assign(document.createElement("i"), {
        className: "fas fa-plus",
    });

    const addItem = Object.assign(document.createElement("span"), {
        className: "item-title",
        innerText: "Add new item..."
    });

    container.appendChild(plus);
    container.appendChild(addItem);

    return container;
}

/**
 * Form for creating a new item
 * Submit adds the new item to the list of items stored in local storage
 * @returns the form for creating a new item
 */
const form = () => {
    const form = Object.assign(document.createElement("form"), {
        className: "new-item-form",
    });

    const titleField = Object.assign(document.createElement("input"), {
        type: "text",
        placeholder: "Title",
        id: "title-field"
    });
    form.appendChild(titleField);

    const details = Object.assign(document.createElement("input"), {
        type: "text",
        placeholder: "Details...",
        id: "details"
    });
    form.appendChild(details);

    const date = Object.assign(document.createElement("input"), {
        type: "date",
        id: "date-input",
    });
    form.appendChild(date);

    const submit = Object.assign(document.createElement("input"), {
        type: "submit",
        value: "Add",
        id: "submit-button"
    });
    submit.addEventListener("click", (e) => {
        e.preventDefault();

        const list = form.parentNode.parentNode;
        const addItem = form.parentNode;
        list.appendChild(listItem(new Item(titleField.value, details.value, parse(date.value, "yyyy-MM-dd", new Date()), 0)));
        list.removeChild(addItem);
        list.appendChild(newItem());
    });
    form.appendChild(submit);

    const deleteButton = Object.assign(document.createElement("i"), {
        className: "fas fa-trash-alt delete"
    });
    deleteButton.addEventListener("click", () => {
        const list = form.parentNode.parentNode;
        const addItem = form.parentNode;

        list.removeChild(addItem);
        list.appendChild(addItem);
    });
    form.appendChild(deleteButton);

    return form;
}