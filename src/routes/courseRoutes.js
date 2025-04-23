const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseController');

router.post('/create', CourseController.createCourse);
router.get('/:id', CourseController.getCourseById);
router.get('/', CourseController.getAllCourses);

module.exports = router;


//Esto agrega:
//POST /create → Para crear nuevos cursos.
//GET /:id → Para obtener un curso específico.
//GET / → Para listar todos los cursos disponibles.