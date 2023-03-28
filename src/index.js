const app = require('express')()

app.get('/src', (req, res)=>{
    res.send(index.html)
})

module.exports = app


