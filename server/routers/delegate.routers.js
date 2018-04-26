const authRouter = require('./auth.router');
const projectRouter = require('./project.router');
const cardRouter = require('./card.router');



function delegateRoutes(app) {
    app.use('/api/auth', authRouter);
    app.use('/api/project', projectRouter);
    app.use('/api/card', cardRouter);
    

    app.all('*', (req, res) => {
        // console.log('unknown route ' + req.url);
        res.status(404).send({message: 'Cannot access any resource at ' + req.originalUrl});
    });
    
    return app;
}
module.exports = delegateRoutes;