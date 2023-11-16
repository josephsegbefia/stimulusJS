import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["button","link"];

  connect(){
    console.log("Hello, my first stimulus controller");
  }

  disable(){
    this.buttonTarget.innerText = "Bingo!";
    this.buttonTarget.setAttribute("disabled", "");

    this.linkTarget.classList.remove("d-none");
  }

  reset(){
    this.buttonTarget.innerText = "Click Me!";
    this.buttonTarget.removeAttribute("disabled");
    this.linkTarget.classList.add("d-none");
  }
};
