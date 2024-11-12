// index.js
//use side effect importing to import the css file
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);


//example of importing an image file
import odinImage from "./odin.jpg";

const image=document.createElement("img");
image.src=odinImage;
document.body.appendChild(image);

