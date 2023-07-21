import {header, sidebar, main} from './base.js';

const content = Object.assign(document.createElement("div"), {
    id: "content"
});

document.body.appendChild(header());
// content.appendChild(header());
content.appendChild(sidebar());

content.appendChild(main());

document.body.appendChild(content);