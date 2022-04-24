//
document.addEventListener("DOMContentLoaded",()=>{
let addBesta = document.getElementById('addBesta')
let bestas={
  bestaN:"",
  bestaImg:"",
  bestaHab:"",
  bestaEneg:"",
}
let bestaList=[]
let addBestaClick=false
  bestaList=JSON.parse(localStorage.getItem('besta_d'))||[]
function saveBesta(){
  let bestaName = document.querySelectorAll('.besta .nameMoster')
  let bestaImage = document.querySelectorAll('.besta .bestaImg')
  let bestaHabilidade = document.querySelectorAll('.besta .inputMoster')
  let bestaEnergia = document.querySelectorAll('.besta .inputMoster2')
  
  bestas.bestaN = bestaName[0].value
  bestas.bestaImg = bestaImage[0].src
  bestas.bestaHab = bestaHabilidade[0].value
  bestas.bestaEneg = bestaEnergia[0].value
  
 
  bestaList.push(bestas)

  let bestaD=JSON.stringify(bestaList)
  
  localStorage.setItem('besta_d',bestaD)
  
  alert(`Criatura ${bestas.bestaN} adicionada ao Bestiário`)
  location.reload()
}

addBesta.addEventListener('click',()=>{
  addBestaClick=true
})
 
document.getElementById('save').addEventListener('click',(e)=>{
  if(addBestaClick){
  saveBesta()
  addBesta.style.diplay="initial"
}else{
  alert('Não há criatura para adicionar ao bestiario :(')
}
})
 
})