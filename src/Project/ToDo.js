import { format } from "date-fns";
import { Project } from "./project";

export class ToDo {
    
    /**
     * Initializes the list of projects and adds the "Today" project
     */
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Today"));
        this.currentProject = this.projects[0];


        this.projects.push(new Project("To-Do List"));

        this.refreshToday();
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


    switchProject(projectName) {
        // console.log(this);
        this.currentProject = this.findProject(projectName);
        // console.log(this);
    }


    getCurrentProject() {
        return this.currentProject;
    }



    addItem(item) {
        this.currentProject.addItem(item);
        this.refreshToday();
    }

    
    refreshToday() {
        let today = this.findProject("Today");

        // for (let i = 1; i < this.projects.length; i++) {
        //     for (let j = 0; j < this.projects[i].getItems().length; i++) {
        //         if (this.projects[i].getItems()[j].displayDueDate() === format(new Date(), 'MM/dd/yyyy')) {
        //             today.addItem(this.projects[i].getItems()[j]);
        //         }
        //     }
        // }

        for (let i = 0; i < this.currentProject.getItems().length; i++) {
            if (this.currentProject.getItems()[i].displayDueDate() === format(new Date(), 'MM/dd/yyyy')) {
                today.addItem(this.currentProject.getItems()[i]);
            }
        }

        console.log(this);
    }

};