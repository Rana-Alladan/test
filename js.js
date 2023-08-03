var button=document.getElementById("enter");
var input = document.getElementById("userinput"); var ul = document.querySelector("ul");
function inputLength() {

return input.value.length;
}
function createListElement() {

var li = document.createElement("li"); 
var btn=document.createElement("button");
btn.innerHTML="Delete ";
btn.className="delete-button";
li.appendChild(document.createTextNode(input.value));
li.appendChild(btn);
ul.appendChild(li);
li.className="list-item";
// li.addEventListener('click',()=>{
//     li.classList.add("done") 
// });
btn.addEventListener('click',function(){
    btn.parentNode.remove();
})
f();
input.value = "";
}
function addListAfterClick() {
if (inputLength() > 0) {
createListElement();
}
}
function addListAfterKeypress (event) { 
    if (inputLength() > 0 && event.keyCode ===13)
    createListElement();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
//var listItems = document.querySelectorAll('.list-item');
function f(){
  var  listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the .done class on the clicked item
    item.classList.toggle('done');
  });
});
}
f();

const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(item => {
    item.addEventListener('click', () => {
      // Toggle the .done class on the clicked item
      item.parentElement.remove();
    });
  });