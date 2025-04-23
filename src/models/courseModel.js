const connection = require('../config/db');

const CourseModel = {
    getAllCourses: (callback) => {
        const query = `SELECT * FROM courses`;
        connection.query(query, callback);
    },
    createCourse: (course, callback) => {
        const query = `INSERT INTO courses (title, description, professor_id) VALUES (?, ?, ?)`;
        connection.query(query, [course.title, course.description, course.professor_id], callback);
    },

    getCourseById: (id, callback) => {
        const query = `SELECT * FROM courses WHERE id = ?`;
        connection.query(query, [id], callback);
    },

    getAllCourses: (callback) => {
        const query = `SELECT * FROM courses`;
        connection.query(query, callback);
    }
};

module.exports = CourseModel;
