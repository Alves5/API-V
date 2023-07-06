import ChavesRepository from "../repositories/ChavesRepository.js";
import Chaves from "../model/Chaves.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";

class ChavesController{

    async findAll(request, response){
        try {
            const result = await ChavesRepository.findAll();
            response.json(result);
        }catch (e) {
          response.json(e);
        }
    }
    
    async store(request, response){
        try {
            const formattedDateTime = FormattedDateTime.formatted();
            const chaves = new Chaves(
                request.body.id,
                request.body.chave,
                request.body.producao,
                request.body.sandbox,
                formattedDateTime
            );
            await ChavesRepository.create(chaves);
            response.json({ message: 'Success'});
        }catch (e) {
            response.json(e);
        }
    }

    async findById(request, response){
        const id = request.params.id;
        try{
            const result = await ChavesRepository.findById(id);
            Object.keys(result).length == 0 ? response.json({ message: "ID not found" }) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async updateById(request, response){
        const id = request.params.id;
        try {
            const exists = await ChavesRepository.findById(id);
            if (Object.keys(exists).length == 0){
                response.json('ID not found!');
            }else{
                try{
                    const formattedDateTime = FormattedDateTime.formatted();
                    const chaves = new Chaves(
                        request.body.id,
                        request.body.chave,
                        request.body.producao,
                        request.body.sandbox,
                        formattedDateTime
                    );
                    await ChavesRepository.update(chaves, id);
                    response.json({ message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async deleteById(request, response){
        const id = request.params.id;
        try {
            const exists = await ChavesRepository.findById(id);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found!'});
            }else{
                await ChavesRepository.delete(id);
                response.json({message: 'Success'});
            }
        }catch (e) {
            response.json(e);
        }
    }
}
export default new ChavesController();