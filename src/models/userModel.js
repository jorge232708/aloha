const connection = require('../config/db');

const UserModel = {
    createUser: (user, callback) => {
        const query = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;
        connection.query(query, [user.name, user.email, user.password, user.role], callback);
    },

    getUserByEmail: (email, callback) => {
        const query = `SELECT * FROM users WHERE email = ?`;
        connection.query(query, [email], callback);
    }
};

module.exports = UserModel;
