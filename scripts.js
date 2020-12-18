// DOM Elements
const addButton = document.querySelector(".addBtn");
let input = document.querySelector(".todoInput");
const container = document.querySelector(".contziner");
const itemContainer = document.querySelector(".item-container");
const clearBox = document.querySelector(".clear");
const clearButton = document.querySelector(".clearBtn");
const errormessage = document.querySelector(".error");


class todo {
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement("input");
        input.value = itemName;
        input.disabled = true;
        input.classList.add("todoItem", "px-3");
        input.type = "text";

        let itemBox = document.createElement("div");
        itemBox.classList.add("item");

        let completeButton = document.createElement("button");
        completeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle" id="check"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
        completeButton.classList.add("completeTodo");
        

        let editButton = document.createElement("button");
        editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit" id="edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>';
        editButton.classList.add("editTodo");

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle" id="delete"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
        deleteButton.classList.add("deleteTodo");


        itemContainer.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(completeButton);
        itemBox.appendChild(editButton);
        itemBox.appendChild(deleteButton);


        // addEventListeners
        completeButton.addEventListener("click", () => this.complete(input));
        editButton.addEventListener("click", () => this.edit(input));
        deleteButton.addEventListener("click", () => this.delete(itemBox));
        clearButton.addEventListener("click", () => this.clearAll(itemBox));
    }

    clearAll(item){
        itemContainer.removeChild(item);
    }

    edit(input){
       if( input.disabled = !input.disabled){
           input.classList.toggle("edit");
       } else {
           return
       }
    }

    delete(item){
        itemContainer.removeChild(item);
    }

    complete(input){
        if(this.input = true){
            input.classList.toggle("done");
        } else {
            return
        }
    }
}

function check(){
    if(input.value !== ""){
        new todo(input.value.trim());
        input.value = "";
        clearBox.classList.remove("clear");
    } else {
        errormessage.classList.remove("error");
        errormessage.classList.add("show");
        setTimeout(() => {
            errormessage.classList.remove("show");
            errormessage.classList.add('error');
        }, 3000);
    }
}

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    check();
})