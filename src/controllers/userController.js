const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const UserController = {
    registerUser: (req, res) => {
        const { name, email, password, role } = req.body;
        
        // Encriptar contraseña
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({ error: 'Error al encriptar la contraseña' });
            }

            const newUser = { name, email, password: hashedPassword, role };
            
            UserModel.createUser(newUser, (err, result) => {
                if (err) {
                    return res.status(500).json({ error: 'Error registrando usuario' });
                }
                res.status(201).json({ message: 'Usuario registrado correctamente' });
            });
        });
    },

    getUserByEmail: (req, res) => {
        const { email } = req.params;
        
        UserModel.getUserByEmail(email, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error obteniendo usuario' });
            }
            if (!result.length) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            res.status(200).json(result[0]);
        });
    }
};

module.exports = UserController;
