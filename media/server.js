const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
app.get("/upload", (req, res) => {
   res.json({message:"Hello"});
});

app.post("/upload", (req, res) => {
    // use modules such as express-fileupload, Multer, Busboy
    
    setTimeout(() => {
        console.log('file uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 3001);
});

app.listen(3001, () => {
    console.log(`Server running on port 3001`)
});