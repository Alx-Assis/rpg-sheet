document.addEventListener('DOMContentLoaded',()=>{
let heroName=document.getElementById('heroName')
let heroImage=document.getElementById('heroImage')
let heroClasse=document.getElementById('heroClasse')
let heroHab=document.getElementById('heroHab')
let heroEnergia=document.getElementById('heroEnergia')
let heroMagia=document.getElementById('heroMagia')
let heroOuro=document.getElementById('heroOuro')
let heroSorte=document.getElementById('heroSorte')
let pass=document.getElementById('pass')
let present=document.getElementById('present')
let future=document.getElementById('future')
let equip=document.getElementById('equip2')



let hero={
  heroN:"",
  heroI:"",
  heroC:"",
  heroH:"",
  heroE:"",
  heroO:"",
  heroM:"",
  heroS:"",
  pass:"",
  present:"",
  future:"",
  equip:"",
}

let btnSave=document.getElementById('save')

btnSave.addEventListener('click',(e)=>{
hero.heroN=heroName.value
hero.heroI=heroImage.src
hero.heroC=heroClasse.value
hero.heroH=heroHab.value
hero.heroE=heroEnergia.value
hero.heroM=heroMagia.value
hero.heroO=heroOuro.value
hero.heroS=heroSorte.value
hero.present=present.value
hero.pass=pass.value
hero.future=future.value
hero.equip=equip.value

let data=JSON.stringify(hero)

localStorage.setItem('hero',data)
alert("ficha salva")
})

hero=JSON.parse(localStorage.getItem('hero'))||{}

heroClasse.value=hero.heroC
heroImage.src=hero.heroI
heroName.value=hero.heroN
heroHab.value=hero.heroH
  heroEnergia.value=hero.heroE
  heroOuro.value=hero.heroO
  heroMagia.value=hero.heroM
  heroSorte.value=hero.heroS
  pass.value=hero.pass
  present.value=hero.present
  equip.value=hero.equip
  
  future.onchange=(e)=>{
    pass.value=present.value
    present.value=e.target.value
    future.value=""
    location.reload()
  }
  
console.table(hero)


})
