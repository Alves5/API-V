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
            console.log(novoArquivoRelacionado);
            await ArquivoRelacionadoRepository.create(novoArquivoRelacionado);

            res.status(201).json({ message: 'Arquivo armazenado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao armazenar o arquivo.' });
        }

    }

    async index(req, res) {
        try {
            const arquivoRelacionados = await ArquivoRelacionadoRepository.findAll();
            res.status(200).json(arquivoRelacionados);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar os arquivos.' });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const arquivoRelacionado = await ArquivoRelacionadoRepository.findById(id);
            res.status(200).json(arquivoRelacionado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar o arquivo.' });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nomeDocumento, objetoReferente, criadoPor, atualizadoPor, camposAdicionais } = req.body;

            const arquivoRelacionado = await ArquivoRelacionadoRepository.findById(id);

            if (!arquivoRelacionado) {
                res.status(404).json({ message: 'Arquivo não encontrado.' });
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

            res.status(200).json({ message: 'Arquivo atualizado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar o arquivo.' });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const arquivoRelacionado = await ArquivoRelacionadoRepository.findById(id);

            if (!arquivoRelacionado) {
                res.status(404).json({ message: 'Arquivo não encontrado.' });
            }

            await ArquivoRelacionadoRepository.delete(id);

            res.status(200).json({ message: 'Arquivo excluído com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir o arquivo.' });
        }
    }

}

export default new ArquivoRelacionadoController();