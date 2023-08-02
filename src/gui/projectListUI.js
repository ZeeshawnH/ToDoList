import { Project } from "../Project/project";
import { list } from "./listUI";

export const listProject = (project, main) => {
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
        main.childNodes[0].innerText = project.getName();
        main.removeChild(main.childNodes[1]);
        main.appendChild(list(project));
    });

    return element;
}

export const projectList = (ToDo, main) => {
    const list = Object.assign(document.createElement("div"), {
        className: "project-list"
    });

    const title = Object.assign(document.createElement("h4"), {
        className: "list-title",
        innerText: "Projects"
    });
    list.appendChild(title);


    for (let i = 1; i < ToDo.getProjects().length; i++) {
        list.appendChild(listProject(ToDo.getProjects()[i], main));
    }
    
    return list;
}

export const today = () => {
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

    return today;
}