const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const app = express();

app.use(bodyParser.json())
app.use(cors());

massive({
    connectionString: 'postgres://ehcwjhbnizyxyo:f2510438800df97532526cde938b75c8b6d892ff33fa17eade7b4b024b1ba386@ec2-54-83-1-94.compute-1.amazonaws.com:5432/d5ssl1hrnebsed?ssl=true'
  }).then( db => {
    app.set('db', db);

    db.init().then( response => {
        console.log('DB Reset');
    })
  })

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`===================================\n Server is listening on port ${port}. \n===================================`)
})