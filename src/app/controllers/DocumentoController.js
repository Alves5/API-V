import DocumentoRepository from "../repositories/DocumentoRepository.js";
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js";

class DocumentoController {

    async store(req, res) {
        try {
            if (Object.keys(req.body).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const { nome, tipo, descricao, relacionadoA, criadoPor, atualizado } = req.body;
            const novoDocumento = {
                nome,
                tipo,
                descricao,
                relacionadoA,
                criadoPor,
                atualizado,
                documento: req.file,
            };

            await DocumentoRepository.create(novoDocumento);

            res.status(HTTP_STATUS.CREATED).json({response: RESPONSE.SUCCESS, message: 'Documento armazenado com sucesso!'});
        } catch (e) {
            console.error('Erro ao criar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao armazenar o documento.', errors: e});
        }

    }

    async findAll(req, res) {
        try {
            const documentos = await DocumentoRepository.findAll();
            if(Object.keys(documentos).length === 0){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: 'Nenhum documento encontrado.'});
            }

            res.status(HTTP_STATUS.OK).json({response: documentos, message: 'Documentos encontrados com sucesso.'});
        } catch (e) {
            console.error('Erro ao buscar os registros:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao buscar os documentos.', errors: e});
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const documento = await DocumentoRepository.findById(id);
            if(documento === null){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: "Nenhum documento encontrado"});
            }

            res.status(HTTP_STATUS.OK).json({response: documento, message: "Documento encontrado."});
        } catch (e) {
            console.error('Erro ao buscar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao buscar o documento.', errors: e});
        }
    }

    async updateById(req, res) {
        try {
            if (Object.keys(req.body).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const { id } = req.params;
            const { nome, tipo, descricao, relacionadoA, criadoPor, atualizado } = req.body;

            const documento = await DocumentoRepository.findById(id);

            if (!documento) {
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: 'Documento não encontrado.'});
            }

            await DocumentoRepository.update(id, {
                nome, 
                tipo, 
                descricao, 
                relacionadoA, 
                criadoPor, 
                atualizado,
                documento: req.file,
            });

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: 'Documento atualizado com sucesso!' });
        } catch (e) {
            console.error('Erro ao atualizar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao atualizar o documento.', errors: e});
        }
    }

    async deleteById(req, res) {
        try {
            const { id } = req.params;

            const documento = await DocumentoRepository.findById(id);

            if (!documento) {
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: 'Documento não encontrado.'});
            }

            await DocumentoRepository.delete(id);
            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: 'Documento deletado com sucesso!'});
        } catch (e) {
            console.error('Erro ao deletar o registro:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao deletar o documento.', errors: e});
        }
    }
}

export default new DocumentoController();