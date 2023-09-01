import Contrato from "../model/Contrato.js";
import ContratoRepository from "../repositories/ContratoRepository.js";
import moment from "moment/moment.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";
import gerar_pdf from "../Utils/gerar_pdf.js";
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
            if (exists.rowCount  !== 0){
                response.json({status: false, message: 'Contract already exists'});
            }else{
                try{
                    const formattedDateTime = FormattedDateTime.formatted();
                    const contrato = new Contrato(
                        request.body.numero_contrato,
                        request.body.status,
                        request.body.numero_contato,
                        request.body.numero_proposta,
                        request.body.documentoCliente,
                        request.body.seguroViajem,
                        request.body.visto,
                        request.body.acomodacao,
                        request.body.translado,
                        request.body.contrato_pai,
                        request.body.criado_por,
                        null,
                        formattedDateTime,
                        null
                    );
                    await ContratoRepository.create(contrato);
                    response.json({status: true, message: 'Success'});
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
            if (result.rowCount === 0){
                response.json({message: 'ID not found!'});
            }else{
                response.json(result)
            }
        }catch (e) {
            response.json(e);
        }
    }

    async updateByNumero(request, response){
        const numero = request.params.numero;
        try {
            const exists = await ContratoRepository.findByNumeroContrato(numero);
            if (exists.rowCount === 0){
                response.json({status: false, message: 'ID not found'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const contrato = new Contrato(
                        null,
                        request.body.status,
                        request.body.numero_contato,
                        request.body.numero_proposta,
                        request.body.documentoCliente,
                        request.body.seguroViajem,
                        request.body.visto,
                        request.body.acomodacao,
                        request.body.translado,
                        request.body.contrato_pai,
                        null,
                        request.body.atualizado_por,
                        null,
                        formattedDateTime
                    );
                    await ContratoRepository.update(contrato, numero);
                    response.json({status: true, message: 'Success'});
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
                response.json({message: 'Contract not found'});
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

    async createContract(request, response){
        const numero = request.params.numero;
        try {
            const exists = await ContratoRepository.generateContract(numero);
            if (Object.keys(exists).length == 0){
                response.json({message: 'Contract not found'});
            }else{
                // await gerar_pdf.gerarPDF(exists);
                // response.json({message: 'Contrato criado com sucesso!'});
                response.json(exists);
            }
        }catch (e) {
            response.json(e);
        }
    }

}
export default new ContratoController();