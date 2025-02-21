import axios from "axios";

const url = "https://64dc7dcae64a8525a0f69290.mockapi.io/todos";

axios.get(url).then((response) => {
  const todo = response.data;
  elementArray = todo;
  renderArray(elementArray);
});

let elementArray = [];
const addMeHere = document.querySelector("#todoul");

function renderArray(inputedArray) {
  addMeHere.innerHTML = "";
  inputedArray.sort(
    ((a,b) => {
      if(a.date == b.date) return 0;
      if(a.date < b.date) return -1;
      return 1;
    })
  )
  inputedArray.map((todo) => {
    const newli = document.createElement("li");
    newli.innerText = `Nume: ${todo.name}
                                Locatie: ${todo.location}
                                Data: ${todo.date}
                                Task: ${todo.description}
                                `;
    const buttonDivs = document.createElement("div");
    buttonDivs.classList = "buttonDivs";
    const deleteButton = document.createElement("i");
    const updateButton = document.createElement("a");
    deleteButton.classList = "fa fa-trash";
    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      axios
        .delete(`${url}/${todo.id}`)
        .then((response) => console.log(`Deleted post with ID ${todo.id}`));

      addMeHere.removeChild(newli);
    });

    updateButton.classList = "fa fa-refresh fa-spin";
    updateButton.setAttribute("href", `/updatepage.html?id=${todo.id}`);
    updateButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(`updatepage.html?id=${todo.id}`);
    });

    buttonDivs.appendChild(deleteButton);
    buttonDivs.appendChild(updateButton);
    newli.appendChild(buttonDivs);
    addMeHere.appendChild(newli);
  });
}

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm !== "") {
    const filteredArray = elementArray.filter((element) =>
      element.name.toLowerCase().includes(searchTerm)
    );
    renderArray(filteredArray);
  } else {
    renderArray(elementArray);
  }
});
