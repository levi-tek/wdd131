const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const li = document.createElement("entries");
const deleteButton =document.createElement("button");
// li.textContent = input.value;
// deleteButton.textContent = '❌';
// li.append(deleteButton);
// list.append(li);

button.addEventListener("click", function(){
    if (input.value.trim() !== "") {
        // const input = document.querySelector("#favchap");
        // const button = document.querySelector("button");
        // const list = document.querySelector("#list");
        // const li = document.createElement("entries");
        // const deleteButton =document.createElement("button");

        li.textContent = input.value;
        input.value = " ";
        input.focus();
        li.append(deleteButton);
        list.append(li);
        deleteButton.textContent = '❌';
        
        
        

        
    }
    else{
        input.focus()
    }
    
});

deleteButton.addEventListener("click", () => {
    li.removeChild(li);
    input.focus();
});