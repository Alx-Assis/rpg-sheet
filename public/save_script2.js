document.addEventListener("DOMContentLoaded",()=>{ 


 let magia_0= document.querySelectorAll('select')[0]
 let vlr_0= document.querySelectorAll('.qtdeMagia')[0]
 let magia_1= document.querySelectorAll('select')[1]
 let vlr_1= document.querySelectorAll('.qtdeMagia')[1]
 let magia_2= document.querySelectorAll('select')[2]
 let vlr_2= document.querySelectorAll('.qtdeMagia')[2]
 let magia_3= document.querySelectorAll('select')[3]
 let vlr_3= document.querySelectorAll('.qtdeMagia')[3]
 let magia_4= document.querySelectorAll('select')[4]
 let vlr_4= document.querySelectorAll('.qtdeMagia')[4]
 let magia_5= document.querySelectorAll('select')[5]
 let vlr_5= document.querySelectorAll('.qtdeMagia')[5]
 let magia_6= document.querySelectorAll('select')[6]
 let vlr_6= document.querySelectorAll('.qtdeMagia')[6]
 let magia_7= document.querySelectorAll('select')[7]
 let vlr_7= document.querySelectorAll('.qtdeMagia')[7]
 let magia_8= document.querySelectorAll('select')[8]
 let vlr_8= document.querySelectorAll('.qtdeMagia')[8]
 let magia_9= document.querySelectorAll('select')[9]
 let vlr_9= document.querySelectorAll('.qtdeMagia')[9]
 let magia_10= document.querySelectorAll('select')[10]
 let vlr_10= document.querySelectorAll('.qtdeMagia')[10]
 let magia_11= document.querySelectorAll('select')[11]
 let vlr_11= document.querySelectorAll('.qtdeMagia')[11]
  
  let magias={
    magia_00:"",
    vlr_00:"",
    magia_01:"",
    vlr_01:"",
    magia_02:"",
    vlr_02:"",
    magia_03:"",
    vlr_03:"",
    magia_04:"",
    vlr_04:"",
    magia_05:"",
    vlr_05:"",
    magia_06:"",
    vlr_06:"",
    magia_07:"",
    vlr_07:"",
    magia_08:"",
    vlr_08:"",
    magia_09:"",
    vlr_09:"",
    magia_10:"",
    vlr_10:"",
    magia_11:"",
    vlr_11:"",
  }
  
let btnSave = document.getElementById('save')
function saveData() {
  magias.magia_00=magia_0.value
  magias.magia_01=magia_1.value
  magias.magia_02=magia_2.value
  magias.magia_03=magia_3.value
  magias.magia_04=magia_4.value
  magias.magia_05=magia_5.value
  magias.magia_06=magia_6.value
  magias.magia_07=magia_7.value
  magias.magia_08=magia_8.value
  magias.magia_09=magia_9.value
  magias.magia_10=magia_10.value
  magias.magia_11=magia_11.value
  
  magias.vlr_00=vlr_0.value
  magias.vlr_01=vlr_1.value
  magias.vlr_02=vlr_2.value
  magias.vlr_03=vlr_3.value
  magias.vlr_04=vlr_4.value
  magias.vlr_05=vlr_5.value
  magias.vlr_06=vlr_6.value
  magias.vlr_07=vlr_7.value
  magias.vlr_08=vlr_8.value
  magias.vlr_09=vlr_9.value
  magias.vlr_10=vlr_10.value
  magias.vlr_11=vlr_11.value
  
  let dataM=JSON.stringify(magias)
 
  
  localStorage.setItem('data_m',dataM)


  
  alert("magias salva")
}

btnSave.addEventListener('click',(e)=>{
  saveData()
})



magias= JSON.parse(localStorage.getItem('data_m'))||{}



magia_0.value=magias.magia_00
vlr_0.value=magias.vlr_00
magia_1.value=magias.magia_01
vlr_1.value=magias.vlr_01
magia_2.value=magias.magia_02
vlr_2.value=magias.vlr_02
magia_3.value=magias.magia_03
vlr_3.value=magias.vlr_03
magia_4.value=magias.magia_04
vlr_4.value=magias.vlr_04
magia_5.value=magias.magia_05
vlr_5.value=magias.vlr_05
magia_6.value=magias.magia_06
vlr_6.value=magias.vlr_06
magia_7.value=magias.magia_07
vlr_7.value=magias.vlr_07
magia_8.value=magias.magia_08
vlr_8.value=magias.vlr_08
magia_9.value=magias.magia_09
vlr_9.value=magias.vlr_09
magia_10.value=magias.magia_10
vlr_10.value=magias.vlr_10
magia_11.value=magias.magia_11
vlr_11.value=magias.vlr_11
  
  })