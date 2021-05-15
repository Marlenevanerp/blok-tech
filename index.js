const express = require('express')
const app = express()
const port = 3001;

// static files 
app.use(express.static('static')) //de static files worden opgevraagd 
app.use('style.css', express.static(__dirname + 'static/style.css'))

// set Views
app.set('views','./views')
app.set('view engine', 'ejs')

app.get('/',(req, res) => {
    res.render('index.ejs', {})
})
app.get('/about',(req, res) => {
  res.render('about.ejs', {})
})


// Error 404
app.use(function(req,res){
	res.status(404);
	res.render('404')
})
// liston on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})