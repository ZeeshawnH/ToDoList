import { Project } from "./project";

export class ToDo {
    
    /**
     * Initializes the list of projects and adds the "Today" project
     */
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Today"));
        this.projects.push(new Project("To-Do List"));
    }

    /**
     * Adds project to list of projects
     * @param {String} projectName 
     */
    addProject(projectName) {
        this.projects.push(new Project(projectName));
    }

    /**
     * Finds the Project instance with the given project name
     * @param {Project} projectName the name of the project to be found
     * @returns the Project instance with the corresponding name
     */
    findProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName);
    }

    getProjects() {
        return this.projects;
    }

};