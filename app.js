 var list =document.getElementById("lists");
 function addtodo()
 {
     var todo_item =document.getElementById("to-do");


     //create li
     var li= document.createElement('li');
     var liText= document.createTextNode(todo_item.value);
     li.appendChild(liText);


     //create button
     var delBtn= document.createElement("button");
     var delText= document.createTextNode("Delete");
     delBtn.setAttribute("class","btn-danger btn-md ")
     delBtn.setAttribute("onclick","deleteItem(this)");
     delBtn.appendChild(delText)
     li.appendChild(delBtn)
     //edit
     var edtBtn= document.createElement("button");
     var edtText= document.createTextNode("Edit");
     edtBtn.setAttribute("class","btn-danger btn-md ")
     edtBtn.setAttribute("onclick","editItem(this)");
     edtBtn.appendChild(edtText)
     li.appendChild(edtBtn)
    
     list.appendChild(li)
    
     todo_item.value=""
 }
function deleteItem(e){

 e.parentNode.remove();
}
function deleteTodo(){
    list.innerHTML=""
}
function editItem(e)
{  var inp= e.parentNode.firstChild.nodeValue;
    var editValue= prompt("Enter Edit value", inp)
    e.parentNode.firstChild.nodeValue=editValue
 
}