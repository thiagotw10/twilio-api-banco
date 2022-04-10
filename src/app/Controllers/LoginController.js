const User = require('./Models/User');
const bcrypt = require('bcryptjs');


class LoginController{

    async index(req, res){ 
  
        const {email, senha} = req.body;

         let userExistEmail = await User.findOne({ email: email});

        const senhaVerifica = await bcrypt.compare(senha, userExistEmail.senha);

        if(userExistEmail && senhaVerifica){

            return res.status(200).json({
                message: "conectado com sucesso!!",
                userExistEmail
            })

        }else{
            return res.status(400).json({
                message: "email ou senha errado"
            })
        }



    }

}


module.exports = new LoginController();
