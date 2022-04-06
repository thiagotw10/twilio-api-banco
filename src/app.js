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
            
            

      
            this.app.use(cors({origin: "https://thiagotw10.github.io/semantix-front/", credentials: true}));
            next();
        })
    }


    routes(){
        this.app.use(routes);
    }



}


module.exports = new App().app;
