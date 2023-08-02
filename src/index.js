import {header, sidebar, main} from './base.js';
import { ToDo } from './Project/ToDo.js';

const manager = new ToDo();

const content = Object.assign(document.createElement("div"), {
    id: "content"
});

document.body.appendChild(header());

const mainContent = main();

content.appendChild(sidebar(manager, mainContent));

content.appendChild(mainContent);

document.body.appendChild(content);