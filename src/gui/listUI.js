import { listItem } from "./itemUI";
import { Item } from "../Project/item";
import { format, parse } from "date-fns";

export const list = () => {
    const list = Object.assign(document.createElement("ul"), {
        className: "list"
    });

    list.appendChild(document.createElement("li").appendChild(listItem(new Item("Parent", "", new Date(2023, 2, 21), 2))));

    list.appendChild(newItem());

    return list;
}

export const title = (text) => {
    const title = Object.assign(document.createElement("div"), {
        className: "project-title",
        innerText: text
    });
    
    return title;
}

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
    container.addEventListener("click", () => {
        newItem.classList.toggle("new");
        container.classList.toggle("hidden");
        itemForm.classList.toggle("hidden");
    });
    
    return newItem;
};

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
        list.appendChild(addItem());
    });
    form.appendChild(deleteButton);

    return form;
}