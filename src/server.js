const express = require('express')
const cors = require('cors')

const port = 3000
const app = express()
app.use(cors())

app.get('/test', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.send({response: 'Ok!'})
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})
