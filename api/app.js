let express = require('express');
let app = express();

let mongoose = require('mongoose');
let cors = require('cors');

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
const User = require('./models/user.js');

mongoose.connect('mongodb://localhost/brainhub', {useNewUrlParser: true});


app.get('/', (req, res) => {
  res.send('Hello world');
})

app.post('/react', (req, res) => {
  
  User.create(req.body, (err, user) => {
    if(err) {
      console.log('Brainhub error: ', err);
      res.send(err)
    }
    else{
      console.log('Brainhub user: ', user);
      res.send(user)
    }
  })
})


app.listen(9000, () => {
    console.log('App running on port 9000');
})

module.exports = app;