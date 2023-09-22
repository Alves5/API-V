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

            res.status(201).json({ message: 'Biblioteca armazenada com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao armazenar a biblioteca.' });
        }

    }

    async findAll(req, res) {
        try {
            const bibliotecas = await BibliotecaRepository.findAll();
            res.status(200).json(bibliotecas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar as bibliotecas.' });
        }
    }

    async findByCodigo(req, res) {
        try {
            const { codigo } = req.params;
            const biblioteca = await BibliotecaRepository.findByCodigo(codigo);
            res.status(200).json(biblioteca);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar a biblioteca.' });
        }
    }

    async updateByCodigo(req, res) {
        try {
            const { codigo } = req.params;
            const { nome, descricao, criadoPor, atualizadoPor } = req.body;

            const biblioteca = await BibliotecaRepository.findByCodigo(codigo);

            if (!biblioteca) {
                res.status(404).json({ message: 'Biblioteca não encontrada.' });
            }

            const bibliotecaAtualizada = {
                nome,
                descricao,
                criadoPor,
                atualizadoPor,
            };

            await BibliotecaRepository.update(codigo, bibliotecaAtualizada);

            res.status(200).json({ message: 'Biblioteca atualizada com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar a biblioteca.' });
        }
    }

    async deleteByCodigo(req, res) {
        try {
            const { codigo } = req.params;

            const biblioteca = await BibliotecaRepository.findByCodigo(codigo);

            if (!biblioteca) {
                res.status(404).json({ message: 'Biblioteca não encontrada.' });
            }

            await BibliotecaRepository.delete(codigo);

            res.status(200).json({ message: 'Biblioteca excluída com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir a biblioteca.' });
        }
    }
}
export default new BibliotecaController();