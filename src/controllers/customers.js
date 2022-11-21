const CustomersModel = require('../models/customers')
const {crypto} = require('../helpers/password')

function viewRegister(req, res){ 
    res.render('register', { title:'resgiter' })
}

async function add(req,res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)


    const register = new CustomersModel ( {
        name,
        age,
        email,
        password: passwordCrypto,
    } )

    register.save()
    res.render('index')


}

// Listar Clientes

async function listUsers(req, res){
    const users = await CustomersModel.find()
    res.render('list',{
        users,
    })

}

// Edit view Clientes, e tras cliente
async function editView(req,res){
    const {id}= req.query // pegando id da url
    const user = await CustomersModel.findById(id) // consultando esse usuario no banco

    //console.log(id)
   
    //console.log(user)
    res.render('edit',{
        user,
    })
}

// Edit Clientes

async function edit(req, res){
    
    const {
        name,
        age,
        email,
    } = req.body


      
    const { id } = req.params
    console.log(id)

    const user = await CustomersModel.findById(id) // consultando esse usuario no banco
    

    user.name = name
    user.age = age
    user.email = email
   
    user.save()

    res.render('register',{

    })


}

// Edit Clientes
async function remove(req,res){
   
    const {id} = req.params
    console.log(id)

    //const remove = await CustomersModel.deleteOne({_id: id})
    
    //if(remove.deletedCount){
    //    res.redirect('/list')
    //}

}
module.exports = {
    add,
    viewRegister,
    listUsers,
    editView,
    edit,
    remove
} 