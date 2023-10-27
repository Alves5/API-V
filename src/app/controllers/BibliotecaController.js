import BibliotecaRepository from "../repositories/BibliotecaRepository.js";
import {HTTP_STATUS, MESSAGES, RESPONSE} from "../Utils/ApiMessages.js";
class BibliotecaController {

    async store(req, res) {
        try {
            if (Object.keys(req.body).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

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

            res.status(HTTP_STATUS.CREATED).json({response: RESPONSE.SUCCESS, message: 'Biblioteca armazenada com sucesso!' });
        } catch (e) {
            console.error('Erro ao criar o biblioteca:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao armazenar a biblioteca.', errors: e});
        }

    }

    async findAll(req, res) {
        try {
            const bibliotecas = await BibliotecaRepository.findAll();
            if(Object.keys(bibliotecas).length === 0){
                res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: 'Nenhuma biblioteca encontrada.'});
            }else{
                res.status(HTTP_STATUS.OK).json({response: bibliotecas, message: 'Bibliotecas encontradas com sucesso.'});
            }
        } catch (e) {
            console.error('Erro ao buscar as bibliotecas:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao buscar as bibliotecas.', errors: e});
        }
    }

    async findByCodigo(req, res) {
        try {
            const { id } = req.params;
            const biblioteca = await BibliotecaRepository.findByCodigo({_id: id});
            if(biblioteca === null){
                return res.status(HTTP_STATUS.OK).json({response: RESPONSE.WARNING, message: "Nenhuma biblioteca encontrada."});
            }

            res.status(HTTP_STATUS.OK).json({response: biblioteca, message: "Biblioteca encontrada."});
        } catch (e) {
            console.error('Erro ao buscar o biblioteca:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao buscar a biblioteca.', errors: e});
        }
    }

    async updateByCodigo(req, res) {
        try {
            if (Object.keys(req.body).length === 0){
                return res.status(HTTP_STATUS.BAD_REQUEST).json({ response: RESPONSE.WARNING, message: MESSAGES.ERROR_NO_BODY });
            }

            const { id } = req.params;
            const { nome, descricao, criadoPor, atualizadoPor } = req.body;
            const biblioteca = await BibliotecaRepository.findByCodigo({_id: id});

            if (!biblioteca) {
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: 'Biblioteca não encontrada.' });
            }

            const bibliotecaAtualizada = {
                nome,
                descricao,
                criadoPor,
                atualizadoPor,
            };

            await BibliotecaRepository.update({_id: id}, bibliotecaAtualizada);

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: 'Biblioteca atualizada com sucesso!' });
        } catch (e) {
            console.error('Erro ao atualizar a biblioteca:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao atualizar a biblioteca.', errors: e});
        }
    }

    async deleteByCodigo(req, res) {
        try {
            const { id } = req.params;
            const biblioteca = await BibliotecaRepository.findByCodigo({_id: id});

            if (!biblioteca) {
                res.status(HTTP_STATUS.NOT_FOUND).json({response: RESPONSE.WARNING, message: 'Biblioteca não encontrada.' });
            }

            await BibliotecaRepository.delete({_id: id});

            res.status(HTTP_STATUS.OK).json({response: RESPONSE.SUCCESS, message: 'Biblioteca excluída com sucesso!' });
        } catch (e) {
            console.error('Erro ao deletar a biblioteca:', e);
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({response: RESPONSE.ERROR, message: 'Erro ao excluir a biblioteca.', errors: e});
        }
    }
}
export default new BibliotecaController();