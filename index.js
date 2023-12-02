
let inputData=document.getElementById('input-box');
let unorderedList=document.getElementById('list-container');



function addTask(){
    if(inputData.value===''){
        alert("Please Enter Something");
    }else{
        let listItem=document.createElement("li");
        listItem.innerHTML=inputData.value;
        unorderedList.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        listItem.appendChild(span);
    }
    inputData.value="";
    saveData();
}

unorderedList.addEventListener("click",function(e){
    if(e.target['tagName'] === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target['tagName']==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", unorderedList.innerHTML);
}

function showTask(){
    unorderedList.innerHTML=localStorage.getItem("data");
}
showTask();