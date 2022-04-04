const Jobs = require('./Models/Jobs');
const yup = require('yup');
const { json } = require('express/lib/response');

class JobsController {
   



    async index(req, res){

        let valor = Jobs.find({}).lean().exec();
        const data = await valor;
        console.log(data)

        return res.status(200).json({
            message: "mostrando todos os dados do jobs",
            data
        })

        
    }

    async add(req, res){


        // validação de campos pelo yup 
            let schema = yup.object().shape({

                nome: yup.string().required(),
                usuario: yup.string().required(),
                status: yup.string().required(),
                recorrencia: yup.string().required(),
                valor: yup.string().required(),
                caso: yup.string().required()
            })

            
            if(!(await schema.isValid(req.body))){
                return res.status(400).json({
                    message: "dados invalidos"
                })
            }
        //   fim yup


        
        let userExistEmail = await Jobs.findOne({ nome: req.body.nome});

        if(userExistEmail){

            return res.status(400).json({
                message: "esse job já existe"
            })
        }
       


        const {nome, usuario, status, recorrencia, valor, caso} = req.body;

        const data = {
            nome,
            usuario,
            status,
            recorrencia,
            valor,
            caso
        }

        await Jobs.create(data, (err)=>{
            if(err)
            return res.status(400).json({
                message: "erro ao tentar inserir job"
            })


            return res.status(200).json({
                message: "job cadastrado com sucesso!!"
            })
        })

        console.log(req.body);

    }


   async edit(req, res){

        let id = req.params.id;

        Jobs.findById(id, function (err, adventure) {
            if(err)
            return res.status(400).json({
                erro:true 
            })

            let data = adventure;
            return res.status(200).json({
                message: `job ${id} `,
                data
            })

        });

    }

    update(req, res){

        let id =  req.params.id;

        const {nome, usuario, status, recorrencia, valor, caso} = req.body;

       

        Jobs.findByIdAndUpdate(id, { nome: nome, usuario: usuario, status: status, recorrencia: recorrencia, valor: valor, caso: caso }, function(err, valid){
            if(err)
            return res.status(400).json({
                erro:true 
            })

            return res.status(200).json({
                message: `Job editado com sucesso!!`,
            })


        })
    }


    delete(req, res){

        let id =  req.params.id;

        Jobs.findByIdAndRemove(id, function(err, valid){
            if(err)
            return res.status(400).json({
                erro:true 
            })


            return res.status(200).json({
                message: `Job deletado com sucesso!!`,
            })
        })
    }






}

module.exports = new JobsController();