import { listItem } from "./itemUI";

export const list = () => {
    const list = Object.assign(document.createElement("div"), {
        className: "list"
    });

    list.appendChild(listItem("Item", ""));

    return list;
}

export const title = (text) => {
    const title = Object.assign(document.createElement("div"), {
        className: "project-title",
        innerText: text
    });
    
    return title;
}