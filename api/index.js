const app = require('express')()

app.get('/api', (req, res)=>{
    res.send({'hola': 'hello'})
})

module.exports = app


