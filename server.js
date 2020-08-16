const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ 'Res': 'ok' })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})