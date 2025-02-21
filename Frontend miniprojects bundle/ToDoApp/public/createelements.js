import axios from 'axios'

const url = 'https://64dc7dcae64a8525a0f69290.mockapi.io/todos';


const submitButton = document.querySelector("#submitbutton");
const addMeHere = document.querySelector("#todoul");


submitButton.addEventListener("click", (event) => {
event.preventDefault();

const myName = document.querySelector("#name");
const myLocation = document.querySelector("#location");
const myDate = document.querySelector("#date");
const myToDo = document.querySelector("#todo");

const todo = {
    name : myName.value,
    location : myLocation.value,
    date: myDate.value,
    description : myToDo.value

}
if(todo.name && todo.location && todo.date && todo.description)
{addElement(todo);
}
})

function addElement(todo)
{
    axios.post("https://64dc7dcae64a8525a0f69290.mockapi.io/todos", todo)
    .then( (response) => {
console.log(response);
    })
}
