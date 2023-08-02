import { Item } from "../Project/item";
import {format} from "date-fns/format";

export const listItem = (listItem) => {

    const li = document.createElement("li");

    const item = Object.assign(document.createElement("div"), {
        className: "item"
    });

    const checkbox = Object.assign(document.createElement("i"), {
        className: "far fa-check-circle checkbox"
    });

    const title = Object.assign(document.createElement("span"), {
        className: "item-title",
        innerText: listItem.getTitle()
    });

    const info = Object.assign(document.createElement("span"), {
        className: "info"
    });
    const edit = Object.assign(document.createElement("i"), {
        className: "far fa-edit edit"
    });
    const deleteButton = Object.assign(document.createElement("i"), {
        className: "fas fa-trash-alt delete"
    });
    const date = Object.assign(document.createElement("span"), {
        className: "date",
        innerText: listItem.getDueDate()
    });
    info.appendChild(edit);
    info.appendChild(deleteButton)
    info.appendChild(date);

    item.appendChild(checkbox);
    item.appendChild(title);
    item.appendChild(info);

    // Event listeners
    item.addEventListener("click", () => {
        checkbox.classList.toggle("fas");
        checkbox.classList.toggle("far");
        title.classList.toggle("item-checked");
    });

    deleteButton.addEventListener("click", () => {
        item.parentNode.removeChild(item);
    })
    
    li.appendChild(item);
    return li;
}