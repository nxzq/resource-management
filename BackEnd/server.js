const express = require('express');
const app = express();
const fs = require('fs')

// enable middleware || pipeline
app.use(express.json())

// PORT
const PORT = process.env.PORT || 5000;

// Mock Data
var resources
fs.readFile('./MockData/Resources.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return 
    }
    resources = JSON.parse(jsonString)
})

// GET ALL
app.get('/resources', (req, res) => {
    res.send(resources);
});

// GET Table Data
app.get('/resources/table', (req, res) => {
    let tableData = []
    resources.forEach(r => {
        data = {
            Id: r.Id,
            FirstName: r.FirstName,
            LastName: r.LastName,
            Role: r.Role,
            Email: r.Email,
            Skills: r.Skills
        }
        tableData.push(data)
    })
    res.send(tableData);
});

// GET Resource By ID
app.get('/resources/:id', (req, res) => {
    // Find Resource
    let resource = resources.find(r => r.Id === parseInt(req.params.id));
    // 404 Not Found
    if (!resource) return res.status(404).send('The resource with the given ID was not found');
    res.send(resource);
});

// // POST Resource By ID [{NOT CURRNENTLY WORKING}]
// app.post('/resource', (req, res) => {
//     // 400 Bad Request
//     // if (error) return res.status(400).send(result.error.details[0].message);
//     let resource = {
//         // Create Object
//     };
//     resources.push(resource);
//     res.send(resource);
// });

// // DELETE Resource By ID [{NOT CURRNENTLY WORKING}]
// app.delete('/resources/:id', (req, res) => {
//     // Find Resource
//     let resource = resources.find(r => r.Id === parseInt(req.params.id));
//     // 404 Not Found
//     if (!resource) return res.status(404).send('The resource with the given ID was not found');
//     // Delete
//     let index = resources.indexOf(resource);
//     resources.splice(index, 1);
//     // Return
//     res.send(resource);
// });

// // UPDATE Resource By ID [{NOT CURRNENTLY WORKING}]
// app.put('/resources/:id', (req, res) => {
//     // Find Resource
//     let resource = resources.find(r => r.Id === parseInt(req.params.id));
//     // 404 Not Found
//     if (!resource) return res.status(404).send('The resource with the given ID was not found');
//     // Update Resource
//         // Logic
//     res.send(resource);
// });

// PORT
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});