const {Router} = require('express');


const UserController = require('./app/Controllers/UserController');
const JobsController = require('./app/Controllers/JobsController');
const LoginController = require('./app/Controllers/LoginController');

const routes = new Router();

// rota do login
routes.post("/login", LoginController.index);
// fim da rota do login

// rotas do user
routes.get("/cliente", UserController.index);
routes.post("/cliente", UserController.add);
routes.get("/cliente/:id", UserController.edit);
routes.put("/cliente/:id", UserController.update);
routes.delete("/cliente/:id", UserController.delete);
// fim rotas do user

// rotas do jobs
routes.get("/jobs", JobsController.index);
routes.post("/jobs", JobsController.add);
routes.get("/jobs/:id", JobsController.edit);
routes.put("/jobs/:id", JobsController.update);
routes.delete("/jobs/:id", JobsController.delete);
// fim rotas do jobs




module.exports = routes;