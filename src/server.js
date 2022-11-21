const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const routes = require('./routes')
const db = require('./database')

const app = express()

// conexão com o BD
db.connect() 




// template egine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Dados via formulario post
app.use(express.urlencoded({extended: true}))

//definino as rotas
app.use('/', routes)

const port = process.env.PORT || 8080
app.listen(8080, ()=> console.log(`Serve escultando na porta ${port}`)  ) 