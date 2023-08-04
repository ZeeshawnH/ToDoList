import './style.css';
import {list, title} from './gui/listUI';
import {listProject, projectList, today} from './gui/projectListUI';
import {Project} from './Project/project';

export const header = () => {
  const header = document.createElement('header');

  header.appendChild(Object.assign(document.createElement('div'), {
    id: 'title',
    innerHTML: 'To-Do',
  }));

  header.appendChild(Object.assign(document.createElement('div'), {
    id: 'date',
    innerHTML: '7/18/2023',
  }));

  return header;
};

export const sidebar = (ToDo, container) => {
  const sidebar = Object.assign(document.createElement('nav'), {
    id: 'sidebar',
  });

  sidebar.appendChild(today(ToDo, container));

  sidebar.appendChild(projectList(ToDo, container));

  return sidebar;
};

export const main = (project, ToDo) => {
  const main = Object.assign(document.createElement('main'), {
    id: 'main',
  });

  main.appendChild(title(project.getName()));

  main.appendChild(list(ToDo));

  return main;
};
