import axios from 'axios'
const currURL = window.location.href;

let id = currURL.slice(currURL.indexOf('?') + 1);
id = id.slice(id.indexOf('=') + 1);
console.log(id);
 /* -- getting in answer the ID i need ---*/
const url = 'https://64dc7dcae64a8525a0f69290.mockapi.io/todos';


axios.get(url)
    .then(
        (response) => {
            const todo = response.data;
            const toBeDisplayed = todo.find(
                (element) => element.id === id
            )

        if(toBeDisplayed)
        {
            const nameInput = document.querySelector("#name");
            nameInput.value = toBeDisplayed.name;
            const locationInput = document.querySelector("#location");
            locationInput.value = toBeDisplayed.location;
            const dateInput = document.querySelector("#date");
            dateInput.value = toBeDisplayed.date; 
            const todoInput = document.querySelector("#todo");
            todoInput.value = toBeDisplayed.description;
        }
        }
    );

const submitButton = document.querySelector("#submitbutton");
        submitButton.addEventListener("click", (e) => {
            e.preventDefault();

const myName = document.querySelector("#name");
const myLocation = document.querySelector("#location");
const myDate = document.querySelector("#date");
const myToDo = document.querySelector("#todo");

const theNewElement = {
    name : myName.value,
    location : myLocation.value,
    date: myDate.value,
    description : myToDo.value

}
if(theNewElement.name && theNewElement.location && theNewElement.date && theNewElement.description)
{
    axios.put(`${url}/${id}`, theNewElement)
    .then(
        console.log("edited")
    )
   
}
else
{
    alert("all fields must be completed");
}
    
        })