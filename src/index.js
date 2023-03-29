const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  app.listen(3000, () => {
    console.log('Aplicación escuchando en el puerto 3000');
  });
  























// import express from "express";
// import { dirname, join } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = 3000;
// app.use("/", (req,res)=>{
//     res.sendFile(path.resolve(__dirname, 'src/index.html'))
// })

// app.listen(3000, () => {
//     console.log(`Server listo en el puerte ${port}`)
// })