import PropostaRepository from "../repositories/PropostaRepository.js";
import Proposta from "../model/Proposta.js";
import ContratoController from "./ContratoController.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";

class PropostaController{

    async findAll(request, response){
        try {
            const result = await PropostaRepository.findAll();
            response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async store(request, response){
        const numero = request.body.numero_proposta;
        try {
            const exists = await PropostaRepository.findByNumeroProposta(numero);
            if (Object.keys(exists).length != 0){
                response.json({status: 200, message: 'Proposal already exists'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const proposta = new Proposta(
                        request.body.numero_proposta, request.body.numero_contato, request.body.fase, request.body.pais, request.body.cidade, request.body.instituicao, request.body.tipo_curso,
                        request.body.valor_curso, request.body.turma_curso, request.body.duracao_curso, request.body.carga_horaria_curso, request.body.tipo_acomodacao, request.body.duracao_acomodacao,
                        request.body.valor_acomodacao, request.body.descricao_taxa_acomodacao, request.body.taxa_acomodacao, request.body.descricao_agencia_acomodacao, request.body.agencia_acomodacao,
                        request.body.cambio, request.body.total_pessoa, request.body.moeda_contratante, request.body.simbolo_moeda_contratante, request.body.moeda_destino, request.body.simbolo_moeda_destino,
                        request.body.data_prevista_embarque, request.body.data_maxima_embarque, request.body.taxa_desistencia_aluno, request.body.tipo_pagamento, request.body.valor_entrada, request.body.data_entrada, request.body.tipo_pagamento_entrada,
                        request.body.quantidade_parcela, request.body.tipo_pagamento_parcela, request.body.criado_por, request.body.atualizado_por, formattedDateTime, formattedDateTime
                    );
                    await PropostaRepository.create(proposta);
                    response.json({message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findByNumeroProposta(request, response){
        const numero = request.params.numero;
        try {
            const result = await PropostaRepository.findByNumeroProposta(numero);
            Object.keys(result).length == 0 ? response.json({message: 'ID not found'}) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async updateByNumeroProposta(request, response){
        const numero = request.params.numero;
        try {
            const exists = await PropostaRepository.findByNumeroProposta(numero);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const proposta = new Proposta(
                        null, request.body.numero_contato, request.body.fase, request.body.pais, request.body.cidade, request.body.instituicao, request.body.tipo_curso,
                        request.body.valor_curso, request.body.turma_curso, request.body.duracao_curso, request.body.carga_horaria_curso, request.body.tipo_acomodacao, request.body.duracao_acomodacao,
                        request.body.valor_acomodacao, request.body.descricao_taxa_acomodacao, request.body.taxa_acomodacao, request.body.descricao_agencia_acomodacao, request.body.agencia_acomodacao,
                        request.body.cambio, request.body.total_pessoa, request.body.moeda_contratante, request.body.simbolo_moeda_contratante, request.body.moeda_destino, request.body.simbolo_moeda_destino,
                        request.body.data_prevista_embarque, request.body.data_maxima_embarque, request.body.taxa_desistencia_aluno, request.body.tipo_pagamento, request.body.valor_entrada, request.body.data_entrada, request.body.tipo_pagamento_entrada,
                        request.body.quantidade_parcela, request.body.tipo_pagamento_parcela, null, request.body.atualizado_por, null, formattedDateTime
                    );
                    await PropostaRepository.update(proposta, numero);
                    response.json({message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async deleteByNumeroProposta(request, response){
        const numero = request.params.numero;
        try {
            const exists = await PropostaRepository.findByNumeroProposta(numero);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found'});
            }else{
                await PropostaRepository.delete(numero);
                response.json({message: 'Success'});
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findRelatedList(request, response){
        let {objeto, numero} = request.params;
        try {
            const result = await PropostaRepository.findRelatedList(objeto, numero);
            Object.keys(result).length == 0 ? response.json({status: 404, message: 'No record found'}) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }
}
export default new PropostaController();