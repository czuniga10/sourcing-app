const express = require('express');
var bcrypt = require('bcryptjs');
const getDb = ('./database/bootstrap.database.js');

const addMiddleware = require('./middleware/decorate.middleware');
const delegateRoutes = require('./routers/delegate.routers');

const app = express();

addMiddleware(app);

// app.post('/api/post', verifyToken, (req, res) => {
    
//     jwt.verify(req.token, 'secretkey', (err, authData) => {
//         if(err) {
//             res.sendStatus(403);
//         }
//         else {
//             res.json({
//                 message: 'Post Created ...',
//                 authData
//             });   
//         }
//     })
// });

app.post('/api/login', (req, res) => {
    
      //can add expiration time ex (   { expiresIn: "30s" }   )
    jwt.sign({user: req.user[0]}, 'secretkey', (err, token) => {
        res.json({
            token
        });
    });
})

app.get('api/me/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.READ.get_user( [id] )
        .then( user => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});


// Verify Token
function verifyToken(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    //check if bearer is undifined
    if(typeof bearerHeader !== 'undefined') {
        //split at the space
        const bearer = bearerHeader.split(' ');
        // get token from array
        const bearerToken = bearer[1];
        //set the token
        req.token = bearerToken;
        //Next middleware
        next();
    }
    else {
        //forbidden
        res.sendStatus(403);
    }
}







delegateRoutes(app);

// app.get('*', (req, res) => {
//     res.sendFile('index.html', {root: path.join(__dirname, '../build')});
// });

app.all('*', (req, res) => {
    res.status(404).send({message: "Cannot access any resources at " + req.originalUrl });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`===================================\n Server is listening on port ${port}. \n===================================`)
})