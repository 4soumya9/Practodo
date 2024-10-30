document.addEventListener("DOMContentLoaded", function () {
  const formm = document.querySelector(".input-form");
  const todoInput = document.querySelector(".inputt");
  const todoList = document.querySelector(".todo-list");

  const todoSubmit = document.querySelector(".todo-button");
    editItem = null;
    editMode= false;
  formm.addEventListener("submit",function(e){
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if(todoText !== "" ){
        if(editMode){
            editItem.firstChild.innerHTML= todoText;
            todoSubmit.innerText= "Add to do";
            editItem=null;
            editMode=false;


        }else{
            addToDoItem(todoText);
        }
        todoInput.value="";
    }else{
        alert("enter valid text");
    }
  })
  todoList.addEventListener("click",function(e){
    
    const target= e.target;

    if(target.tagName === "BUTTON"){
        const todoItem = target.parentNode;
    if(target.innerText === "❌"){
        todoItem.remove();
    }else if(target.innerText === "✏️"){
        editMode=true;
        editItem=todoItem;
        todoSubmit.innerText="Edit Todo";
        todoInput.value= todoItem.firstChild.textContent;
        todoInput.focus();
    }

    }

  })

  function addToDoItem(todoText) {
    const todoItem = document.createElement("li");
    const removeBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    todoItem.innerHTML = `<span>${todoText}</span>`;
    removeBtn.innerText = "❌";
    editBtn.innerText = "✏️";
    todoItem.appendChild(removeBtn);
    todoItem.appendChild(editBtn);

    todoList.appendChild(todoItem);
  }
});
