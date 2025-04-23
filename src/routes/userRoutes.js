const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.registerUser);
router.get('/user/:email', UserController.getUserByEmail);

module.exports = router;


//POST /register → Para registrar nuevos usuarios.
//GET /user/:email → Para obtener información de un usuario por su correo electrónico.