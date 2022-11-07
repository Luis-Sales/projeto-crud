const express = require('express')
const path = require('path')

const app = express()


// template egine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Dados via formulario post
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res)=>{
    res.render('index', { title:'Home' })
})

app.get('/', (req, res)=>{
    res.send('Página não encontrada')
})



const port = process.env.PORT || 8080
app.listen(8080, ()=> console.log(`Serve escultando na porta ${port}`)  ) 