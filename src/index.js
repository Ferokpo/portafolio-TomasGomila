import express from "express";

const app = express();
const port = 3000;
app.use("/", (req,res)=>{
    res.json({mensage:"hola desde expreso aplicacioneses"})
})

app.listen(3000, () => {
    console.log(`Server listo en el puerte ${port}`)
})