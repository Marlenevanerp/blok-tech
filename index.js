const express = require('express')
const app = express()
const port = 3000

let ejs = require('ejs');
app.set('view engine', 'ejs')

app.use(express.static('static')) //de static files worden opgevraagd 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
