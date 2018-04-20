const authRouter = require('./auth.router');

function delegateRoutes(app) {
    app.use('/api/auth', authRouter);

    app.all('*', (req, res) => {
        // console.log('unknown route ' + req.url);
        res.status(404).send({message: 'Cannot access any resource at ' + req.originalUrl});
    });
    
    return app;
}
module.exports = delegateRoutes;