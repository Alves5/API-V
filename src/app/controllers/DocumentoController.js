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

            res.status(201).json({ message: 'Documento armazenado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao armazenar o documento.' });
        }

    }

    async findAll(req, res) {
        try {
            const documentos = await DocumentoRepository.findAll();
            res.status(200).json(documentos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar os documentos.' });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const documento = await DocumentoRepository.findById(id);
            res.status(200).json(documento);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar o documento.' });
        }
    }

    async updateById(req, res) {
        try {
            const { id } = req.params;
            const { nome, tipo, descricao, relacionadoA, criadoPor, atualizado } = req.body;

            const documento = await DocumentoRepository.findById(id);

            if (!documento) {
                res.status(404).json({ message: 'Documento não encontrado.' });
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

            res.status(200).json({ message: 'Documento atualizado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar o documento.' });
        }
    }

    async deleteById(req, res) {
        try {
            const { id } = req.params;

            const documento = await DocumentoRepository.findById(id);

            if (!documento) {
                res.status(404).json({ message: 'Documento não encontrado.' });
            }

            await DocumentoRepository.delete(id);

            res.status(200).json({ message: 'Documento deletado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao deletar o documento.' });
        }
    }
}

export default new DocumentoController();