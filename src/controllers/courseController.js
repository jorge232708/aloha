const CourseModel = require('../models/courseModel');

const CourseController = {
    createCourse: (req, res) => {
        const { title, description, professor_id } = req.body;

        const newCourse = { title, description, professor_id };

        CourseModel.createCourse(newCourse, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error creando curso' });
            }
            res.status(201).json({ message: 'Curso creado correctamente' });
        });
    },

    getCourseById: (req, res) => {
        const { id } = req.params;

        CourseModel.getCourseById(id, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error obteniendo curso' });
            }
            if (!result.length) {
                return res.status(404).json({ error: 'Curso no encontrado' });
            }
            res.status(200).json(result[0]);
        });
    },

    getAllCourses: (req, res) => {
        CourseModel.getAllCourses((err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error obteniendo cursos' });
            }
            res.status(200).json(results);
        });
    }
};

module.exports = CourseController;