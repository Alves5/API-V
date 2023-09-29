import BibliotecaRepository from "../repositories/BibliotecaRepository.js";
class BibliotecaController {

    async store(req, res) {
        try {
            const { codigo, nome, modeloTexto, tipo, descricao, criadoPor, atualizadoPor } = req.body;

            const novaBiblioteca = {
                codigo,
                nome,
                tipo,
                modeloTexto,
                modeloContrato : req.file,
                descricao,
                criadoPor,
                atualizadoPor,
            };

            await BibliotecaRepository.create(novaBiblioteca);

            res.status(201).json({response: 1, message: 'Biblioteca armazenada com sucesso!' });
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao armazenar a biblioteca.', errors: e});
        }

    }

    async findAll(req, res) {
        try {
            const bibliotecas = await BibliotecaRepository.findAll();
            if(Object.keys(bibliotecas).length === 0){
                res.status(200).json({response: 0, message: 'Nenhuma biblioteca encontrada.'});
            }else{
                res.status(200).json({response: bibliotecas, message: 'Bibliotecas encontradas com sucesso.'});
            }
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao buscar as bibliotecas.', errors: e});
        }
    }

    async findByCodigo(req, res) {
        try {
            const { codigo } = req.params;
            const biblioteca = await BibliotecaRepository.findByCodigo(codigo);
            if(biblioteca !== null){
                res.status(200).json({response: biblioteca, message: "Biblioteca encontrada."});
            }else{
                res.status(200).json({response: 0, message: "Nenhuma biblioteca encontrada."});
            }
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao buscar a biblioteca.', errors: e});
        }
    }

    async updateByCodigo(req, res) {
        try {
            const { codigo } = req.params;
            const { nome, descricao, criadoPor, atualizadoPor } = req.body;

            const biblioteca = await BibliotecaRepository.findByCodigo(codigo);

            if (!biblioteca) {
                res.status(404).json({response: 0, message: 'Biblioteca não encontrada.' });
            }

            const bibliotecaAtualizada = {
                nome,
                descricao,
                criadoPor,
                atualizadoPor,
            };

            await BibliotecaRepository.update(codigo, bibliotecaAtualizada);

            res.status(200).json({response: 1, message: 'Biblioteca atualizada com sucesso!' });
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao atualizar a biblioteca.', errors: e});
        }
    }

    async deleteByCodigo(req, res) {
        try {
            const { codigo } = req.params;

            const biblioteca = await BibliotecaRepository.findByCodigo(codigo);

            if (!biblioteca) {
                res.status(404).json({response: 0, message: 'Biblioteca não encontrada.' });
            }

            await BibliotecaRepository.delete(codigo);

            res.status(200).json({response: 0, message: 'Biblioteca excluída com sucesso!' });
        } catch (e) {
            res.status(500).json({response: 0, message: 'Erro ao excluir a biblioteca.', errors: e});
        }
    }
}
export default new BibliotecaController();