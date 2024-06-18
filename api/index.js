const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 2024;
app.listen(PORT,()=>{
    console.log('Server is Running on the Port 2024')
})

app.get('/',(req,res) => {
   res.status(201).send('<h1>Hello World Message hai yeh Bas</h1>')
})