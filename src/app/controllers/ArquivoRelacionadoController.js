import ArquivoRelacionadoRepository from '../repositories/ArquivoRelacionadoRepository.js';
import ArquivoRelacionado from '../model/ArquivoRelacionado.js';
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js";
class ArquivoRelacionadoController {
    async store(req, res) {
        try {
            if (Object.keys(req.body).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const { id, nomeDocumento, objetoReferente, criadoPor, atualizadoPor, camposAdicionais } = req.body;

            const novoArquivoRelacionado = new ArquivoRelacionado({
                id,
                nomeDocumento,
                objetoReferente,
                arquivo: req.file,
                criadoPor,
                atualizadoPor,
                camposAdicionais,
            });

            await ArquivoRelacionadoRepository.create(novoArquivoRelacionado);
            res.status(HTTP_STATUS.CREATED).json({response: RESPONSE.SUCCESS, message: 'Arquivo armazenado com sucesso!' });
        } catch (e) {
            console.error('Erro ao criar arquivo:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao armazenar o arquivo.', errors: e});
        }

    }

    async index(req, res) {
        try {
            const arquivoRelacionados = await ArquivoRelacionadoRepository.findAll();
            if(Object.keys(arquivoRelacionados).length === 0){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: 'Nenhum arquivo encontrado.'});
            }

            res.status(HTTP_STATUS.OK).json({response: arquivoRelacionados, message: 'Arquivos encontrados com sucesso.'});
        } catch (e) {
            console.error('Erro ao buscar os arquivos:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao buscar os arquivos.', errors: e});
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const arquivoRelacionado = await ArquivoRelacionadoRepository.findById(id);
            if(arquivoRelacionado === null){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: "Nenhum arquivo encontrado"});
            }

            res.status(HTTP_STATUS.OK).json({response: arquivoRelacionado, message: "Arquivo encontrado."});
        } catch (e) {
            console.error('Erro ao buscar o arquivo:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao buscar o arquivo.', errors: e});
        }
    }

    async update(req, res) {
        try {
            if (Object.keys(req.body).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const { id } = req.params;
            const { nomeDocumento, objetoReferente, criadoPor, atualizadoPor, camposAdicionais } = req.body;

            const arquivoRelacionado = await ArquivoRelacionadoRepository.findById(id);

            if (!arquivoRelacionado) {
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: 'Arquivo não encontrado.' });
            }

            const arquivoRelacionadoAtualizado = {
                nomeDocumento,
                objetoReferente,
                arquivo: req.file,
                criadoPor,
                atualizadoPor,
                camposAdicionais,
            };

            await ArquivoRelacionadoRepository.update(id, arquivoRelacionadoAtualizado);
            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: 'Arquivo atualizado com sucesso!' });
        } catch (e) {
            console.error('Erro ao atualizar o arquivo:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao atualizar o arquivo.', errors: e});
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const arquivoRelacionado = await ArquivoRelacionadoRepository.findById(id);

            if (!arquivoRelacionado) {
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: 'Arquivo não encontrado.' });
            }

            await ArquivoRelacionadoRepository.delete(id);
            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: 'Arquivo excluído com sucesso!' });
        } catch (e) {
            console.error('Erro ao deletar o arquivo:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao excluir o arquivo.', errors: e});
        }
    }

}

export default new ArquivoRelacionadoController();