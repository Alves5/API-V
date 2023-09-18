import ArquivoRelacionadoRepository from "../repositories/ArquivoRelacionadoRepository.js";
import ArquivoRelacionado from "../model/ArquivoRelacionado.js";
import moment from "moment";
import AcessoRepository from "../repositories/AcessoRepository.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";
class ArquivoRelacionadoController {
    async findAll(request, response) {
        try {
            const result = await ArquivoRelacionadoRepository.findAll();
            response.json(result);
        } catch (error) {
            response.json(error);
        }
    }

    async store(request, response) {
        try {
            const formattedDateTime = FormattedDateTime.formatted();
            const arquivoRelacionado = new ArquivoRelacionado(
                null,
                request.body.nome,
                request.body.objeto,
                request.body.numero_contato,
                request.body.arquivo,
                formattedDateTime,
                request.body.criado_por,
                formattedDateTime,
                request.body.atualizado_por
            );
            await ArquivoRelacionadoRepository.create(arquivoRelacionado);
            response.json({message: 'Success'});
        } catch (error) {
            response.json(error);
        }
    }

    async findById(request, response) {
        try {
            const id = request.params.id;
            const result = await ArquivoRelacionadoRepository.findById(id);
            if (Object.keys(result).length == 0) {
                response.json({message: "ID not found"});
            } else {
                response.json(result);
            }
        } catch (e) {
            response.json(e);
        }
    }

    async updateById(request, response) {
        const id = request.params.id;
        try {
            const exists = await ArquivoRelacionadoRepository.findById(id);
            if (Object.keys(exists).length == 0) {
                response.json({message: "ID not found"});
            } else {
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    exists[0]['created_at'] = moment().format('YYYY/MM/DD HH:mm:ss');
                    const arquivoRelacionado = new ArquivoRelacionado(
                        request.body.id,
                        request.body.nome,
                        request.body.objeto,
                        request.body.numero_contato,
                        request.body.arquivo,
                        exists[0]['created_at'],
                        exists[0]['Criado por'],
                        formattedDateTime,
                        request.body.atualizado_por
                    );
                    await ArquivoRelacionadoRepository.update(arquivoRelacionado, id);
                    response.json({message: "Success"});
                } catch (e) {
                    response.json(e);
                }
            }
        } catch (e) {
            response.json(e);
        }
    }

    async deleteById(request, response) {
        const id = request.params.id;
        try {
            const exists = await ArquivoRelacionadoRepository.findById(id);
            if (Object.keys(exists).length == 0) {
                response.json({ message: "ID not found" });
            } else {
                await ArquivoRelacionadoRepository.delete(id);
                response.json({ message: "Success" });
            }
        } catch (error) {
            response.json(error);
        }
    }

}

export default new ArquivoRelacionadoController();