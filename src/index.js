import {header, sidebar, main} from './base.js';
import { ToDo } from './Project/ToDo.js';

const manager = new ToDo();

const content = Object.assign(document.createElement("div"), {
    id: "content"
});

document.body.appendChild(header());
content.appendChild(sidebar(manager));

content.appendChild(main());

document.body.appendChild(content);