const Joi = require('joi');
const express = require('express');
const app = express();

// enable middleware || pipeline
app.use(express.json())

// PORT
const PORT = process.env.PORT || 5000;

// app.get()
// app.post()
// app.put()
// app.delete()

// Mock Data
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
    { id: 5, name: 'course5' }
]

// Validation Funciton
function validateCourseName(course) {
    let schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
};

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    // Import Validation
    let { error } = validateCourseName(req.body);
    // 400 Bad Request
    if (error) return res.status(400).send(result.error.details[0].message);
    let course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // Find Resource
    let course = courses.find(c => c.id === parseInt(req.params.id));
    // 404 Not Found
    if (!course) return res.status(404).send('The course with the given ID was not found');
    // Import Validation
    let { error } = validateCourseName(req.body);
    // 400 Bad Request
    if (error) return res.status(400).send(result.error.details[0].message);
    // Update Resource
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // Find Resource
    let course = courses.find(c => c.id === parseInt(req.params.id));
    // 404 Not Found
    if (!course) return res.status(404).send('The course with the given ID was not found');
    // Delete
    let index = courses.indexOf(course);
    courses.splice(index, 1);
    // Return
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    // 404 Not Found
    if (!course) return res.status(404).send('The course with the given ID was not found');
    res.send(course);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});