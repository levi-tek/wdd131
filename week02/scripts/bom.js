const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value.trim() !== "") {

        const li = document.createElement("entries");
        const deleteButton =document.createElement("button");

        li.textContent = input.value;
        input.value = " ";
        input.focus();
        li.append(deleteButton);
        list.append(li);
        deleteButton.textContent = '❌';
        
        
        

        deleteButton.addEventListener("click", () => {
            li.remove(li);
            input.focus();
        });
    }
    else{
        input.focus()
    }
    
});