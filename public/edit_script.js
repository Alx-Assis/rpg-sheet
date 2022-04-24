function start() {

let preview = document.querySelectorAll(' #section1 span')
let modal = document.createElement('div')
modal.setAttribute('class','modal')

let  btn = document.createElement('button')
let txt = document.createTextNode("Mudar")
btn.appendChild(txt)
let input= document.createElement('input')
  input.setAttribute('type','text')
  input.setAttribute('value','')
  
  modal.appendChild(input)
  modal.appendChild(btn)
  
    let indiceDefault ={
      nome:`Nome`,
      classe:`Classe`,
      habilidade:`Habilid.`,
      energia:`Energia`,
      magia:`Magia`,
      sorte:`Sorte`,
      ouro:`Ouro`,
      mapa:`Mapa`,
      passado:`Passado`,
      presente:`Presente`,
      futuro:`Futuro`,
      equipamentos:'Equipamentos',
      }

     
     
     
let indice=JSON.parse(localStorage.getItem('data_i'))||indiceDefault

for(let i=0;i<12;i++){
  
 preview[i].addEventListener("click",(e)=>{
   modal.style.display='initial'
   preview[i].style.opacity=".5"
   document.body.appendChild(modal)
   
   input.addEventListener("click",()=>{
       
    if(input.value===""){
     setTimeout(()=>{
      
        modal.style.display="none"
      
     },3500)
     }
    
    btn.addEventListener("click", (e)=>{
     preview[i].innerHTML=input.value
     
     modal.style.display='none'

indice ={nome:`${preview[0].innerHTML}`,
      classe:`${preview[1].innerHTML}`,
      habilidade:`${preview[2].innerHTML}`,
      energia:`${preview[3].innerHTML}`,
      magia:`${preview[4].innerHTML}`,
      sorte:`${preview[5].innerHTML}`,
      ouro:`${preview[6].innerHTML}`,
      mapa:`${preview[7].innerHTML}`,
      passado:`${preview[8].innerHTML}`,
      presente:`${preview[9].innerHTML}`,
      futuro:`${preview[10].innerHTML}`,
      equipamentos:`${preview[11].innerHTML}`,
      }
 
  let data_indice=JSON.stringify(indice)
     localStorage.setItem('data_i',data_indice)
      preview[i].style.opacity="1"
      
    })
   } )

 } )
}
preview[0].innerHTML=indice.nome
preview[1].innerHTML=indice.classe
preview[2].innerHTML=indice.habilidade
preview[3].innerHTML=indice.energia
preview[4].innerHTML=indice.magia
preview[5].innerHTML=indice.sorte
preview[6].innerHTML=indice.ouro
preview[7].innerHTML=indice.mapa
preview[8].innerHTML=indice.passado
preview[9].innerHTML=indice.presente
preview[10].innerHTML=indice.futuro
preview[11].innerHTML=indice.equipamentos
modal.setAttribute('class','modal')
 }
 btnChange.addEventListener("click", ()=>{
   
 let btnChange = document.getElementById('btnChange')
 let option= confirm("deseja mudar para ficha editavel?")
 if(option){
   start()
   let encantos = document.getElementById('encantos')
   let box = document.getElementsByClassName('boxMagia')
   let habi = document.getElementsByClassName('hab')
   let ctner1 = document.getElementById('section1')
   let ctner2 = document.getElementById('container')
ctner2.style.backgroundColor="#50129b"
ctner1.style.backgroundColor="#50129b"
habi.style.backgroundColor="#50129b"
encantos.style.backgroundColor="#50129b"
box.style.backgroundColor="#50129b"

 }
 })
 document.getElementById('btnReset').addEventListener("click",()=>{
   let option=confirm("Deseja resetar os indice da ficha?")
   if (option) {
localStorage.removeItem('data_i')
     alert("indices resetado com sucesso :)")
   }
   location.reload()
 } )


