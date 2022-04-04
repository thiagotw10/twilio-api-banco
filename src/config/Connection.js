const mongoose = require('mongoose');


class Connection {
    constructor(){
        this.mongoDB();
    }


    mongoDB(){

        this.mongo = mongoose.connect("mongodb+srv://thiagotw10:matheus123@ipnode.qibol.mongodb.net/ipnode?retryWrites=true&w=majority", {
        }).then(() => {

            console.log("Conexão estabelicida com o MongoDB");

          }).catch((error) => {
            console.log(`Erro ao estabelecer conexão com mongoDB: ${error}`)
          })
    }


}

module.exports = new Connection();