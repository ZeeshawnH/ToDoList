import {header, sidebar} from './base.js';

const content = Object.assign(document.createElement("div"), {
    id: "content"
})

// content.appendChild(header());
content.appendChild(sidebar());


document.body.appendChild(header());
document.body.appendChild(content);