const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// Pagina Incial
router.get('/', IndexController.index)

// View de Clientes
router.get('/register', CustomersController.viewRegister)

// Registar Clientes
router.post('/register/add', CustomersController.add)

// Listar Clientes
router.get('/list', CustomersController.listUsers)

// Edit view Clientes
router.get('/edit', CustomersController.editView)

// Edit  Clientes
router.post('/edit/:id', CustomersController.edit)

// Remove  Clientes
router.get('/remove/:id', CustomersController.remove)

module.exports = router 