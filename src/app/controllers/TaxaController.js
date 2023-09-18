import TaxaRepository from "../repositories/TaxaRepository.js";
import Taxa from "../model/Taxa.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";
class TaxaController{
    async findAll(request, response){
        try {
            const result = await TaxaRepository.findAll();
            response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async store(request, response){
        try {
            const formattedDateTime = FormattedDateTime.formatted();
            const taxa = new Taxa(
                null,
                request.body.numero_proposta,
                request.body.descricao,
                request.body.valor,
                request.body.moeda,
                formattedDateTime,
                formattedDateTime,
                request.body.criado_por,
                null,
                request.body.numero_contato
            );
            await TaxaRepository.create(taxa);
            response.json({message: 'Success'});
        }catch (e) {
            response.json(e);
        }
    }

    async findById(request, response){
        const id = request.params.id;
        try {
            const result = await TaxaRepository.findById(id);
            Object.keys(result).length == 0 ? response.json({message: 'ID not found'}) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async updateById(request, response){
        const id = request.params.id;
        try {
            const exists = await TaxaRepository.findById(id);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const taxa = new Taxa(
                        null,
                        request.body.numero_proposta,
                        request.body.descricao,
                        request.body.valor,
                        request.body.moeda,
                        null,
                        formattedDateTime,
                        null,
                        request.body.atualizado_por,
                        request.body.numero_contato
                    );
                    await TaxaRepository.update(taxa, id);
                    response.json({message: 'Success'});
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
            const exists = await TaxaRepository.findById(id);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found'});
            }else{
                await TaxaRepository.delete(id);
                response.json({message: 'Success'});
            }
        }catch (e) {
            response.json(e);
        }
    }

}
export default new TaxaController();