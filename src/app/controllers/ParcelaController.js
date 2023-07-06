import ParcelaRepository from "../repositories/ParcelaRepository.js";
import Parcela from "../model/Parcela.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";

class ParcelaController{

    async findAll(request, response){
        try {
            const result = await ParcelaRepository.findAll();
            response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async store(request, response){
        const numero = request.body.numero_parcela;
        try {
            const exists = await ParcelaRepository.findByNumero(numero);
            if (Object.keys(exists).length != 0){
                response.json({message: 'Installment already exists'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const parcela = new Parcela(
                        null,
                        request.body.numero_parcela,
                        request.body.total_parcela,
                        request.body.valor_parcela,
                        request.body.moeda_parcela,
                        request.body.status,
                        request.body.data_pagamento_parcela,
                        request.body.numero_proposta,
                        request.body.numero_contato,
                        request.body.criado_por,
                        request.body.atualizado_por,
                        formattedDateTime,
                        formattedDateTime
                    );
                    await ParcelaRepository.create(parcela);
                    response.json({message: 'Success'});
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
            const result = await ParcelaRepository.findByNumero(numero);
            Object.keys(result).length == 0 ? response.json({message: 'Portion not found'}) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async updateByNumero(request, response){
        const numero = request.params.numero;
        try {
            const exists = await ParcelaRepository.findByNumero(numero);
            if (Object.keys(exists).length == 0){
                response.json({message: 'Portion not found'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const parcela = new Parcela(
                        null,
                        null,
                        request.body.total_parcela,
                        request.body.valor_parcela,
                        request.body.moeda_parcela,
                        request.body.status,
                        request.body.data_pagamento_parcela,
                        request.body.numero_proposta,
                        request.body.numero_contato,
                        exists[0]['Criado por'],
                        request.body.atualizado_por,
                        exists[0]['created_at'],
                        formattedDateTime
                    );
                    await ParcelaRepository.update(parcela, numero);
                    response.json({message: 'Success'});
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
            const exists = await ParcelaRepository.findByNumero(numero);
            if (Object.keys(exists).length == 0){
                response.json({message: 'Portion not found'});
            }else{
                await ParcelaRepository.delete(numero);
                response.json({message: 'Success'});
            }
        }catch (e){
            response.json(e);
        }
    }
}
export default new ParcelaController();