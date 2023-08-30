import ContatoRepository from "../repositories/ContatoRepository.js";
import Contato from "../model/Contato.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";

class ContatoController{
    async findAll(request, response){
        try {
            const result = await ContatoRepository.findAll();
            response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async store(request, response){
        const numero = request.body.numero;
        try {
            const exists = await ContatoRepository.findByNumero(numero);
            if (exists.rowCount  !== 0){
                response.json({status: false, message: 'Contact already exists'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const contato = new Contato(
                        null,
                        request.body.nome_completo,
                        request.body.numero,
                        formattedDateTime,
                        null,
                        request.body.responsavel,
                        request.body.criado_por,
                        null,
                        request.body.nacionalidade,
                        request.body.data_nascimento,
                        request.body.cpf,
                        request.body.identidade,
                        request.body.cep,
                        request.body.endereco,
                        request.body.bairro,
                        request.body.cidade,
                        request.body.estado,
                        request.body.email
                    );
                    await ContatoRepository.create(contato);
                    response.json({status: true, message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findByNumero(request, response){
        const numero = request.params.numero;
        try {
            const result = await ContatoRepository.findByNumero(numero);
            result.rowCount  !== 0 ? response.json(result) : response.json({status: false, message: 'Number not found'});
        }catch (e) {
            response.json(e);
        }
    }

    async updateByNumero(request, response){
        const numero = request.params.numero;
        try {
            const exists = await ContatoRepository.findByNumero(numero);
            if (exists.rowCount  === 0){
                response.json({message: 'Number not found'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const contato = new Contato(
                        null,
                        request.body.nome_completo,
                        null,
                        null,
                        formattedDateTime,
                        request.body.responsavel,
                        null,
                        request.body.atualizado_por,
                        request.body.nacionalidade,
                        request.body.data_nascimento,
                        request.body.cpf,
                        request.body.identidade,
                        request.body.cep,
                        request.body.endereco,
                        request.body.bairro,
                        request.body.cidade,
                        request.body.estado,
                        request.body.email
                    );
                    await ContatoRepository.update(contato, numero);
                    response.json({status: true, message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async deleteByNumero(request, response){
        const numero = request.params.numero;
        try {
            const exists = await ContatoRepository.findByNumero(numero);
            if (exists.rowCount  === 0){
                response.json({status: false, message: 'Number not found'});
            }else{
                await ContatoRepository.delete(numero);
                response.json({status: true, message: 'Success'});
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findRelatedList(request, response){
        let {objeto, numero} = request.params;
        try {
            if (objeto === 'ArquivoRelacionado'){
                objeto = 'Arquivo relacionado';
            }
            const result = await ContatoRepository.findRelatedList(objeto, numero);
            Object.keys(result).length == 0 ? response.json({status: 404, message: 'No record found'}) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }
}
export default new ContatoController();