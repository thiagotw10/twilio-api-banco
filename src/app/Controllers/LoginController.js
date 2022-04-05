const User = require('./Models/User');
const bcrypt = require('bcryptjs');


class LoginController{

    async index(req, res){ 
  

        let userExistEmail = await User.findOne({ email: req.body.email});
        let userExistSenha = await User.findOne({ senha: req.body.senha});

        if(userExistEmail && userExistSenha){

            return res.status(200).json({
                message: "conectado com sucesso!!"
            })

        }else{
            return res.status(400).json({
                message: "email ou senha errado"
            })
        }



    }

}


module.exports = new LoginController();
