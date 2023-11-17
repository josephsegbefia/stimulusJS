import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "results"]
  connect(){
    console.log("Hello from the movies controller!");
    // console.log(this.resultsTarget);
  }

  search(event){
    event.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${this.inputTarget.value}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then((data) => {
        data.Search.forEach((result) => {
          const movieTag = `
          <li class = "list-group-item border-8">
            <img src = "${result.Poster}" alt="" width="100" height="100%" >
          </li>`;
          this.resultsTarget.insertAdjacentHTML("beforeend", movieTag)
        })
      })
  }
}
