import { Project } from "../Project/project";
import { list } from "./listUI";
import { main } from "../base";

export const listProject = (project, container, ToDo) => {
    const element = Object.assign(document.createElement("div"), {
        className: "project"
    });

    element.appendChild(Object.assign(document.createElement("i"), {
        className: "fas fa-list-ul"
    }))
    element.appendChild(Object.assign(document.createElement("h4"), {
        innerText: project.getName(),
        className: "list-project-title"
    }));

    element.addEventListener("click", () => {
        ToDo.switchProject(project.getName());

        container.removeChild(container.childNodes[1]);
        container.appendChild(main(project, ToDo));
    });

    return element;
}

export const projectList = (ToDo, container) => {
    const list = Object.assign(document.createElement("div"), {
        className: "project-list"
    });

    const title = Object.assign(document.createElement("h4"), {
        className: "list-title",
        innerText: "Projects"
    });
    list.appendChild(title);


    for (let i = 1; i < ToDo.getProjects().length; i++) {
        list.appendChild(listProject(ToDo.getProjects()[i], container, ToDo));
    }
    
    return list;
}

export const today = (ToDo, container) => {
    const today = Object.assign(document.createElement("div"), {
        className: "project"
    });

    today.appendChild(Object.assign(document.createElement("i"), {
        className: "fas fa-calendar-day"
    }))
    today.appendChild(Object.assign(document.createElement("h4"), {
        innerText: "Today",
        className: "list-project-title"
    }));

    today.addEventListener("click", () => {
        ToDo.switchProject("Today");

        container.removeChild(container.childNodes[1]);
        container.appendChild(main(ToDo.getCurrentProject(), ToDo));
    });

    return today;
}