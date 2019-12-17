const express = require('express');
const app = express();
const cors = require('cors')
const fs = require('fs')
const {resumeUpload} = require('./helpers/multer');

// enable middleware || pipeline
app.use(express.json())
app.use(cors())

// PORT
const PORT = process.env.PORT || 5000;

// Mock Data
const getMockData = () => {return JSON.parse(fs.readFileSync('./MockData/Resources.json','utf8'))}
 
// GET ALL
app.get('/api/resources', (req, res) => {
    // Get Data
    resources = getMockData()
    res.send(resources);
});

// GET ALL Skills
app.get('/api/skills', (req, res) => {
    // Get Data
    resources = JSON.parse(fs.readFileSync('./MockData/Skills.json','utf8'))
    res.send(resources);
});

// GET Table Data
app.get('/api/resources/table', (req, res) => {
    let tableData = []
    // Get Data
    resources = getMockData()
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

// GET Resume By ID
app.get('/api/resources/:id/resume', (req, res) => {
    let path = './MockData/Resumes/' + (req.params.id) + '.pdf'
    try {
        if (fs.existsSync(path)) {
            res.set({
                'Content-Type': "application/pdf",
                'Accept': "application/json"
            })
            res.download(path, "resume.pdf");
        } else {
            res.status(404).send('The resource with the given ID was not found');
        }
      } catch(err) {
            res.status(404).send('The resource with the given ID was not found');
      }
});

// POST Resume By ID
app.post('/api/resources/:id/resume', resumeUpload.single('resume'), (req, res) => {
    if (req.invalidFile) {
        res.status(400).send(req.invalidFile);
        return;
    } else if (req.file.size > 1000**2*2) {
        res.status(400).send('File too large.');
    }
    res.status(204).end();
});

// HEAD Resume headers
app.head('/api/resources/:id/resume', (req, res) => {
    let path = './MockData/Resumes/' + (req.params.id) + '.pdf'
    if (fs.existsSync(path)) {
        const stats = fs.statSync(path);
        res.set({
            'Content-Type': 'application/pdf',
            'Accept': 'application/json',
            'Content-Disposition': 'attachment; filename="resume.pdf"',
            'Content-Length': stats.size
        });
        res.status(200).end();
    } else {
        res.status(404).end();
    }
});

// GET Resource By ID
app.get('/api/resources/:id', (req, res) => {
    // Get Data
    resources = getMockData()
    // Find Resource
    let resource = resources.find(r => r.Id === parseInt(req.params.id));
    // 404 Not Found
    if (!resource) return res.status(404).send('The resource with the given ID was not found');
    res.send(resource);
});

// POST Resource By ID
app.post('/api/resource', (req, res) => {
    // 400 Bad Request
    // if (error) return res.status(400).send(result.error.details[0].message);
    // Get Data
    resources = getMockData()
    let resource = req.body.data
    resource.Id = (Math.max.apply(Math, resources.map(function(o) { return o.Id; }))) + 1
    resources.push(resource);
    res.send(resource);
    fs.writeFileSync('./MockData/Resources.json', JSON.stringify(resources))
});

// UPDATE Resource By ID
app.put('/api/resources/:id', (req, res) => {
    // Get Data
    resources = getMockData()
    // Find Resource
    let resource = resources.find(r => r.Id === parseInt(req.params.id))
    // 404 Not Found
    if (!resource) return res.status(404).send('The resource with the given ID was not found');
    // Update Resource
    resource = req.body.data
    let update = resources.findIndex(x => x.Id == resource.Id);
    resources[update] = resource
    res.send(resource);
    fs.writeFileSync('./MockData/Resources.json', JSON.stringify(resources))
});

// // DELETE Resource By ID [{NOT CURRNENTLY WORKING}]
// app.delete('/api/resources/:id', (req, res) => {
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

// PORT
// LocalHost
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

// // Yash Network (New Office)
// app.listen(5000, '10.27.12.207');

// // Yash Network (Old Office)
// app.listen(5000, '10.1.100.119');