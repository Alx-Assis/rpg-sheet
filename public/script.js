 
 document.addEventListener('DOMContentLoaded', ()=> {
  let heroFileImage = document.getElementById('heroFileImage')
  let heroImage = document.getElementById('heroImage')
  let btnL = document.getElementById('btn')
  let bestial = document.getElementById('bestial-container')
  let bestial2 = document.getElementById('bestial-container2')
  
  let bestas = JSON.parse(localStorage.getItem('besta_d'))||[]
  
  heroFileImage.style.display = "none"

  //criando dinamicamente
  let create = (id)=> {
    let besta= document.createElement('div')
    besta.setAttribute('class', 'besta')
    besta.setAttribute('id',id)


    let inputName= document.createElement('input')
    inputName.setAttribute('class', 'nameMoster')
    inputName.setAttribute('type', 'text')
    inputName.setAttribute('id','inputName')
    inputName.setAttribute('value','')
  
    let bestaImg = document.createElement('img')
    bestaImg.setAttribute('class', 'bestaImg')
    bestaImg.addEventListener('click', ()=> {

      let opt = confirm("DESEJA ALTERAR?")
      
      if (opt) {
      // inputFile.click()
       bestas[id].bestaImg=bestaImg.src
       bestas[id].bestaN=inputName.value
       bestas[id].bestaHab=inputAtr1.value
       bestas[id].bestaEneg=inputAtr2.value
       localStorage.setItem('besta_d',JSON.stringify(bestas))
      } else {}
    })

    let inputFile = document.createElement('input')
    inputFile.setAttribute('type',
      'file')
    inputFile.setAttribute('name',
      'image')
    inputFile.style.display = "none"

    let btnLoad = document.createElement('button')
    let txtBtnLoad = document.createTextNode('carregar')
    btnLoad.appendChild(txtBtnLoad)
    btnLoad.addEventListener('click',
      ()=> {
        inputFile.click()
        read(bestaImg, inputFile, btnLoad)
        
      })


    let atr1 = document.createElement('div')
    atr1.setAttribute('class',
      'attrMoster')
    let spanAtr1 = document.createElement('span')
    spanAtr1.innerHTML = "Habilid."
    let inputAtr1 = document.createElement('input')
    inputAtr1.setAttribute('type',
      'number')
    inputAtr1.setAttribute('class',
      'inputMoster')
    inputAtr1.setAttribute('value',
      '')

    atr1.appendChild(spanAtr1)
    atr1.appendChild(inputAtr1)


    let atr2 = document.createElement('div')
    atr2.setAttribute('class',
      'attrMoster')

    let spanAtr2 = document.createElement('span')
    spanAtr2.innerHTML = "Energia"
    let inputAtr2 = document.createElement('input')
    inputAtr2.setAttribute('type',
      'number')
    inputAtr2.setAttribute('class',
      'inputMoster2')
    inputAtr2.setAttribute('value',
      '')
    atr2.appendChild(spanAtr2)
    atr2.appendChild(inputAtr2)

    besta.appendChild(inputName)
    besta.appendChild(bestaImg)
    besta.appendChild(inputFile)
    besta.appendChild(btnLoad)
    besta.appendChild(atr1)
    besta.appendChild(atr2)



   bestial.appendChild(besta)
    
  }
  //criando dinamicamente







  //bestaFileImage.style.display = "none"


  btnL.addEventListener('click',
    ()=> {
      heroFileImage.click()
      read(heroImage, heroFileImage, btn)
    })

  function read(img, input, btn) {
    img.style.display = 'initial'
    input.addEventListener('change',
      ()=> {
        let file = input.files.item(0)
        let reader = new FileReader()
        reader.readAsDataURL(file)
        btn.style.display = 'none'
        reader.onload = (e)=> {
          img.src = e.target.result


        }
      })}
  //let item =[0]
  let data =[1]
  //let data_b=JSON.parse(localStorage.getItem('besta_d'))||[1]
  let addBesta = document.getElementById('addBesta')
  let addBestaClick = false
  addBesta.addEventListener('click',()=> {
    
   data.map(item =>{
        create(item)
        bestial.appendChild(document.getElementById(item))
        
    })
  addBesta.style.display="none"
  })
 addBestaClick=true
 let data_b = JSON.parse(localStorage.getItem('besta_d'))||[]
 
 
 // teste de div

 
 
 function updateBesta(item) {
  
  
  data_b.map((item,index)=>{
     create(index)
  bestial2.appendChild(document.getElementById(index))
  })
  data_b.map((item,index)=>{
    
  let bestaName = document.querySelectorAll(' #bestial-container2 .besta .nameMoster')
  let bestaImage = document.querySelectorAll('#bestial-container2 .besta .bestaImg')
  let bestaHabilidade = document.querySelectorAll('#bestial-container2 .besta .inputMoster')
  let bestaEnergia = document.querySelectorAll('#bestial-container2 .besta .inputMoster2')
  
  bestaName[index].value=item.bestaN
  bestaImage[index].src=item.bestaImg
  bestaHabilidade[index].value=item.bestaHab
  bestaEnergia[index].value=item.bestaEneg
  })
  
  }
 

updateBesta(data_b)

})



