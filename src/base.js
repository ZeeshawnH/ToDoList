import './style.css';

export const header = () => {
    const header = document.createElement("header");

    header.appendChild(Object.assign(document.createElement("div"), {
        id: "title",
        innerHTML: "To-Do"
    }));

    header.appendChild(Object.assign(document.createElement("div"), {
        id: "date",
        innerHTML: "7/18/2023"
    }));

    return header;
};

export const sidebar = () => {
    const sidebar = Object.assign(document.createElement("nav"), {
        id: "sidebar"
    });



    return sidebar;
};