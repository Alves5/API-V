import fs from "fs";
import Arquivo from "../model/Arquivo.js";
import ArquivoRepository from "../repositories/ArquivoRepository.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";

class ArquivoController {
    async findAll(request, response) {
        try {
            const result = await ArquivoRepository.findAll();
            result !== 0 ? response.json(result) : response.json({ message:"Nada encontrado"});
        } catch (e) {
            response.json(e);
        }
    }
    async store(request, response) {
        try {
            const file = request.file;
            const fileData = fs.readFileSync(file.path);
            const formattedDateTime = FormattedDateTime.formatted();
            const arquivo = new Arquivo(
                null,
                request.body.name,
                fileData,
                formattedDateTime,
                formattedDateTime,
                request.file.mimetype
            );
            await ArquivoRepository.create(arquivo);
            response.json({message: 'Success'});
        } catch (e) {
            response.json(e);
        }
    }
    async findById(request, response){
        const id = request.params.id;
        try {
            const result = await ArquivoRepository.findById(id);
            Object.keys(result).length == 0 ? response.json({ message: "ID not found" }) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async updateById(request, response) {
        const id = request.params.id;
        try {
            const exists = await ArquivoRepository.findById(id)
            if (Object.keys(exists).length == 0) {
                response.json({message: "ID not found"});
            } else {
                try {
                    const file = request.file;
                    const fileData = fs.readFileSync(file.path);
                    const formattedDateTime = FormattedDateTime.formatted();
                    exists[0]['created_at'] = moment().format('YYYY/MM/DD HH:mm:ss');
                    const arquivo = new Arquivo(
                        request.body.id,
                        request.body.name,
                        fileData,
                        exists[0]['created_at'],
                        formattedDateTime,
                        request.file.mimetype
                    );
                    await ArquivoRepository.update(arquivo, id);
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
            const exists = await ArquivoRepository.findById(id);
            if (Object.keys(exists).length == 0) {
                response.json({ message: "ID not found" });
            } else {
                await ArquivoRepository.delete(id);
                response.json({ message: "Success" });
            }
        } catch (error) {
            response.json(error);
        }
    }
}
export default new ArquivoController();