//this can be removed on deployment.. i only created this to test on multiple devices

import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'homepage.html'))
})
app.listen(port, ()=>{
    console.log("server running in http://localhost:3000")
})