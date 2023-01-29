import _ from "lodash";
import "./style.css";
import TestImg from "./test.png";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const img = new Image();
  img.src = TestImg;

  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
