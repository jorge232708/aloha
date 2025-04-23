<template>
  <div>
    <h1>Catalogo de Cursos</h1>
    <button @click="getCourses" @touchstart="getCourses">Mostrar Cursos</button>
    <button @click="getCourses">Cargar Cursos</button>
    <ul>
      <li v-for="course in courses" :key="course.id">
        {{ course.title }} - {{ course.description }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const courses = ref([]);

async function getCourses() {
  const res = await fetch('http://localhost:3000/api/courses/');
  const data = await res.json();
  courses.value = data;
}
</script>
