const express = require('express')

const port = 3003
const app = express()

app.get('/test', (req, res, next) => {
    res.send({response: 'Ok!'})
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})