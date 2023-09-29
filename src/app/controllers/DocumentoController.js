import DocumentoRepository from "../repositories/DocumentoRepository.js";

class DocumentoController {

    async store(req, res) {
        try {
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

            res.status(201).json({response: 1, message: 'Documento armazenado com sucesso!'});
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao armazenar o documento.', errors: e});
        }

    }

    async findAll(req, res) {
        try {
            const documentos = await DocumentoRepository.findAll();
            if(Object.keys(documentos).length === 0){
                res.status(200).json({response: 0, message: 'Nenhum documento encontrado.'});
            }else{
                res.status(200).json({response: documentos, message: 'Documentos encontrados com sucesso.'});
            }
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao buscar os documentos.', errors: e});
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const documento = await DocumentoRepository.findById(id);
            if(documento !== null){
                res.status(200).json({response: documento, message: "Documento encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum documento encontrado"});
            }
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao buscar o documento.', errors: e});
        }
    }

    async updateById(req, res) {
        try {
            const { id } = req.params;
            const { nome, tipo, descricao, relacionadoA, criadoPor, atualizado } = req.body;

            const documento = await DocumentoRepository.findById(id);

            if (!documento) {
                res.status(404).json({response: 0, message: 'Documento não encontrado.'});
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

            res.status(200).json({response: 1, message: 'Documento atualizado com sucesso!' });
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao atualizar o documento.', errors: e});
        }
    }

    async deleteById(req, res) {
        try {
            const { id } = req.params;

            const documento = await DocumentoRepository.findById(id);

            if (!documento) {
                res.status(404).json({response: 0, message: 'Documento não encontrado.'});
            }

            await DocumentoRepository.delete(id);

            res.status(200).json({response: 1, message: 'Documento deletado com sucesso!'});
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao deletar o documento.', errors: e});
        }
    }
}

export default new DocumentoController();