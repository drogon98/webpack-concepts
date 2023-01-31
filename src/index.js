import _ from "lodash";
import "./style.css";
import TestImg from "./test.png";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  const img = new Image();
  img.src = TestImg;

  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
