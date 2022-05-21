const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY ="todos";

let toDos =[]; //배열 선언


function saveToDos()
{
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify(toDos)

}

function deleteToDo(event)
{
// console.log(event.target.parentElement.innerText);  클릭한 정보를 알수있다.
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newTodo)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText="✔";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos(toDos);
}

toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello(item) {
    console.log("hello",item);
}
//item 미츳다 
// parsedTodos.forEach((item) => console.log("hello ",item));

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos)
{
    const parsedTodos = JSON.parse(savedToDos);
    //JSON.parse() "[a,b,c,d"](string) -> [a,b,c,d] (array);
    toDos = parsedTodos; // 전에 값 저장
    parsedTodos.forEach((item) => paintToDo(item));
}