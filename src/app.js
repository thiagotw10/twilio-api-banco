const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
require('./config/Connection');


class App {

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }


    middlewares(){
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use((req, res, next) =>{
            
            
            res.header("access-controll-allow-origin", "*");
            res.header("access-controll-allow-methods", "GET, POST, PUT, DELETE");
            res.header("access-controll-allow-headers", "access, content-type, authorization, acept, origin, x-Requested-With")
      
            this.app.use(cors({origin: "https://semantix-api-2.herokuapp.com", credentials: true}));
            next();
        })
    }


    routes(){
        this.app.use(routes);
    }



}


module.exports = new App().app;
