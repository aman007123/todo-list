let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");


btn.addEventListener("click",function(event){
   let  item = document.createElement("li");
   item.innerText = inp.value;

   ol.appendChild(item);
   inp.value = "";

   let delbtn = document.createElement("button");
   delbtn.innerText= "Delete";
   delbtn.classList.add("Delete");
   item.appendChild(delbtn);


});

ol.addEventListener("click",function(event){
 if(event.target.nodeName=="BUTTON"){
   let list = event.target.parentElement;
   list.remove();
    console.log("delete list item")
 }
});


