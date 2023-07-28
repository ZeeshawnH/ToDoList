import './style.css';
import { list, title } from './gui/listUI';
import { listProject, projectList, today } from './gui/projectListUI';

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

export const sidebar = (ToDo, main) => {
    const sidebar = Object.assign(document.createElement("nav"), {
        id: "sidebar"
    });

    sidebar.appendChild(today());

    sidebar.appendChild(projectList(ToDo));

    return sidebar;
};

export const main = () => {
    const main = Object.assign(document.createElement("main"), {
        id: "main"
    });

    main.appendChild(title("Today"));

    main.appendChild(list());

    return main;
}