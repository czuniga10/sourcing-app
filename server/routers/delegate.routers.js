// const authRouter = require('./auth.router');
const projectRouter = require('./project.router');
const cardRouter = require('./card.router');
const userRouter = require('./user.router')


function delegateRoutes(app) {
    app.use('/api/user', userRouter);
    app.use('/api/project', projectRouter);
    app.use('/api/card', cardRouter);
    // app.use('/api/auth', authRouter);
    
    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resources at " + req.originalUrl });
    });    
    
    return app;
}
module.exports = delegateRoutes;