import Contrato from "../model/Contrato.js";
import ContratoRepository from "../repositories/ContratoRepository.js";
import moment from "moment/moment.js";
import ContatoRepository from "../repositories/ContatoRepository.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";
class ContratoController{
    async findAll(request, response){
        try{
            const result = await ContratoRepository.findAll();
            response.json(result)
        }catch (e) {
            response.json(e);
        }
    }

    async store(request, response){
        const numero = request.body.numero_contrato;
        try {
            const exists = await ContratoRepository.findByNumeroContrato(numero);
            if (Object.keys(exists).length != 0){
                response.json({status: 200, message: 'Contract already exists'});
            }else{
                try{
                    const formattedDateTime = FormattedDateTime.formatted();
                    const contrato = new Contrato(
                        request.body.numero_contrato,
                        request.body.status,
                        formattedDateTime,
                        formattedDateTime,
                        request.body.numero_contato,
                        request.body.criado_por,
                        null,
                        request.body.numero_proposta,
                        request.body.contrato_pai
                    );
                    await ContratoRepository.create(contrato);
                    response.json({message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findByNumeroContrato(request, response){
        try{
            const numero = request.params.numero;
            const result = await ContratoRepository.findByNumeroContrato(numero);
            if (Object.keys(result).length == 0){
                response.json({message: 'ID not found!'});
            }else{
                response.json(result)
            }
        }catch (e) {
            response.json(e);
        }
    }

    async updateById(request, response){
        const numero = request.params.numero;
        try {
            const exists = await ContratoRepository.findByNumeroContrato(numero);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    exists[0]['created_at'] = moment().format('YYYY/MM/DD HH:mm:ss');
                    const contrato = new Contrato(
                        request.body.numero_contrato,
                        request.body.status,
                        exists[0]['created_at'],
                        formattedDateTime,
                        request.body.numero_contato,
                        exists[0]['Criado por'],
                        request.body.atualizado_por,
                        request.body.numero_proposta,
                        request.body.contrato_pai
                    );
                    await ContratoRepository.update(contrato, numero);
                    response.json({message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {

        }
    }

    async deleteById(request, response){
        const numero = request.params.numero;
        try {
            const exists = await ContratoRepository.findByNumeroContrato(numero);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found'});
            }else{
                await ContratoRepository.delete(numero);
                response.json({message: 'Success'});
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findRelatedList(request, response){
        const numero = request.params.numero;
        try {
            const result = await ContratoRepository.findRelatedList(numero);
            Object.keys(result).length == 0 ? response.json({status: 404, message: 'No record found'}) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

}
export default new ContratoController();