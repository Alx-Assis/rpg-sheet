const express = require('express')
const path = require('path')

const app = express()

const server = require('http').createServer(app)



app.use(express.static(path.join(__dirname, 'public')))
app.set('views',path.join(__dirname,'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


app.use('/',(req,res)=>{
  res.render('index.html')
})

server.listen(3000,()=>{
  console.log('servidor rodando na porta 3000 ....')
})