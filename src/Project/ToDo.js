import { Project } from "./project";

export const ToDo = (() => {
    /** List of projects */
    const projects = [];

    projects.push(new Project("Today"));

    /**
     * Adds project to list of projects
     * @param {String} projectName 
     */
    const addProject = (projectName) => {
        projects.push(new Project(projectName));
    }

    /**
     * Finds the Project instance with the given project name
     * @param {Project} projectName the name of the project to be found
     * @returns the Project instance with the corresponding name
     */
    const findProject = (projectName) => {
        return projects.find((project) => project.getName() === projectName);
    }
})();