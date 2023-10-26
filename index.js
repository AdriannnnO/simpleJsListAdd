function dodaj(){
    var item_value = document.getElementById("jd").value;
    console.log(item_value);
    var lista = document.querySelector("ul");
    let item = document.createElement("li");
    item.textContent = item_value;
    item.innerHTML += '<button class="delete-button" onclick="del(this)">Delete</button>'
    lista.appendChild(item);
    
}

function del(dis){
    list_li = dis.parentNode;
    list_li.remove();
}

var input = document.getElementById("jd");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("siema").click();
    input.value="";
  }
});