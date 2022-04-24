var ulElement = document.querySelector("#habEquip ul");
var inputElement = document.querySelector("#habEquip input");
var btnElement = document.querySelector("#habEquip button");

let todos =JSON.parse(localStorage.getItem("list_todos"))||[];
let qtdeE = JSON.parse(localStorage.getItem('qtde_e'))||[]
let todo 

  function deleteTodo(pos){
    todos.splice(pos,1);
    qtdeE.splice(pos,1);
    rendertodo();
    savetodoStorage();
  }

  function rendertodo(){
  ulElement.innerHTML="";
  for(todo of todos){
    
    var listElement = document.createElement("li");
    var listContainer = document.createElement("div");
    listContainer.setAttribute('id',"listContainer");
    var secList1= document.createElement("div");
    secList1.setAttribute('id',"secList1");
    var secList2= document.createElement("div");
    secList2.setAttribute('id',"secList2");
    var secList3= document.createElement("div");
    secList3.setAttribute('id',"secList3");
    var texttodo = document.createTextNode(todo);
    var link = document.createElement("a");
    var textLink = document.createTextNode("🗑️");
    var iptNamber = document.createElement("input");
    var spanQtde = document.createElement("span");
    var spanTxt= document.createTextNode("qtde:");
    var iptNumber = document.createElement("input");
    
      spanQtde.appendChild(spanTxt)
      iptNumber.setAttribute('type','number')
      iptNumber.setAttribute('class','inputMoster')
      iptNumber.addEventListener('change',(e)=>{
        addqtde(pos)
      })
    
        link.setAttribute("href","#");
    let pos = todos.indexOf(todo);
  
  link.addEventListener('click',()=>{
  
       deleteTodo(pos)
    });
    
    iptNumber.value=qtdeE[pos]
    link.appendChild(textLink);
 
    secList1.appendChild(texttodo);
   
    secList2.appendChild(spanQtde);
    secList2.appendChild(iptNumber);
    secList3.appendChild(link);
    listContainer.appendChild(secList1)
    listContainer.appendChild(secList2)
    listContainer.appendChild(secList3)
    
    listElement.appendChild(listContainer)
    ulElement.appendChild(listElement);
    
  }
    }
   
  rendertodo();
  
  function addtodos(){
    
    var inputText = inputElement.value+'        ';
    if (inputText === ''+'        '){
      alert("O campo não pode ser vazio");
    }else{
    
    todos.push(inputText);
    inputElement.value="";
    rendertodo();
    savetodoStorage();
    }
  }
  
  btnElement.onclick=addtodos;
  
  
  
  function addqtde(pos){
   let  inputQtde = document.querySelectorAll("#list input")
    qtdeE[pos]=inputQtde[pos].value
    localStorage.setItem('qtde_e',JSON.stringify(qtdeE))

  }
  
  function savetodoStorage(){
    localStorage.setItem('qtde_e',JSON.stringify(qtdeE))
    localStorage.setItem('list_todos',JSON.stringify(todos));
  }