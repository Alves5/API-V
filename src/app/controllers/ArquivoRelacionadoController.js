import ArquivoRelacionadoRepository from '../repositories/ArquivoRelacionadoRepository.js';
import ArquivoRelacionado from '../model/ArquivoRelacionado.js';
class ArquivoRelacionadoController {
    async store(req, res) {
        try {
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

            res.status(201).json({response: 1, message: 'Arquivo armazenado com sucesso!' });
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao armazenar o arquivo.', errors: e});
        }

    }

    async index(req, res) {
        try {
            const arquivoRelacionados = await ArquivoRelacionadoRepository.findAll();
            if(Object.keys(arquivoRelacionados).length === 0){
                res.status(200).json({response: 0, message: 'Nenhum arquivo encontrado.'});
            }else{
                res.status(200).json({response: arquivoRelacionados, message: 'Arquivos encontrados com sucesso.'});
            }
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao buscar os arquivos.', errors: e});
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const arquivoRelacionado = await ArquivoRelacionadoRepository.findById(id);
            if(arquivoRelacionado !== null){
                res.status(200).json({response: arquivoRelacionado, message: "Arquivo encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum arquivo encontrado"});
            }
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao buscar o arquivo.', errors: e});
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nomeDocumento, objetoReferente, criadoPor, atualizadoPor, camposAdicionais } = req.body;

            const arquivoRelacionado = await ArquivoRelacionadoRepository.findById(id);

            if (!arquivoRelacionado) {
                res.status(404).json({response: 0, message: 'Arquivo não encontrado.' });
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

            res.status(200).json({response: 1, message: 'Arquivo atualizado com sucesso!' });
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao atualizar o arquivo.', errors: e});
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const arquivoRelacionado = await ArquivoRelacionadoRepository.findById(id);

            if (!arquivoRelacionado) {
                res.status(404).json({response: 0, message: 'Arquivo não encontrado.' });
            }

            await ArquivoRelacionadoRepository.delete(id);

            res.status(200).json({response: 1, message: 'Arquivo excluído com sucesso!' });
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao excluir o arquivo.', errors: e});
        }
    }

}

export default new ArquivoRelacionadoController();