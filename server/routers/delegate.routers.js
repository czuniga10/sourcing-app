// const authRouter = require('./auth.router');
const projectRouter = require('./project.router');
const cardRouter = require('./card.router');
const userRouter = require('./user.router')


function delegateRoutes(app) {
    app.use('/api/user', userRouter);
    app.use('/api/project', projectRouter);
    app.use('/api/card', cardRouter);
    // app.use('/api/auth', authRouter);
    

    
    
    return app;
}
module.exports = delegateRoutes;