const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../databases/config.js')

class Server{
    constructor(){
        this.app = express();

        this.port = process.env.PORT;

        this.path ={
            login: '/api/login',
            campers: '/api/campers',
            centros: '/api/centros',
            levels: '/api/levels',
            rutas:  '/api/rutas'
        };

        this.ConnectDB();
        this.middlewares();
        this.routes()
    }

    async ConnectDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))

    }

    routes(){
        this.app.use(this.path.campers,require('../routes/camper.routes.js'));
        this.app.use(this.path.login,require('../routes/login.routes.js'));
        this.app.use(this.path.levels,require('../routes/level.routes.js'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`El server funca en el purto ${this.port}`);
        })
    }
}

module.exports = Server