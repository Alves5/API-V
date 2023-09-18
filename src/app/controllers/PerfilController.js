import PerfilRepository from "../repositories/PerfilRepository.js";
import Perfil from "../model/Perfil.js";
import moment from "moment/moment.js";
import ContratoRepository from "../repositories/ContratoRepository.js";
import FormattedDateTime from "../Utils/FormattedDateTime.js";

class PerfilController{
    async findAll(request, response){
        try{
            const result = await PerfilRepository.findAll();
            response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async store(request, response){
        const nome = request.body.nome;
        try {
            const exists = await PerfilRepository.findByNome(nome);
            if (Object.keys(exists).length != 0){
                response.json({status: 200, message: 'Profile already exists'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    const perfil = new Perfil(
                        request.body.nome,
                        request.body.acessa_configuracoes,
                        request.body.criado_por,
                        request.body.atualizado_por,
                        formattedDateTime,
                        formattedDateTime
                    );
                    await PerfilRepository.create(perfil);
                    response.json({message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findByNome(request, response){
        const nome = request.params.nome;
        try {
            const result = await PerfilRepository.findByNome(nome);
            Object.keys(result).length == 0 ? response.json({message: 'ID not found'}) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async updateByNome(request, response){
        const nome = request.params.nome;
        try {
            const exists = await PerfilRepository.findByNome(nome);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found'});
            }else{
                try {
                    const formattedDateTime = FormattedDateTime.formatted();
                    exists[0]['created_at'] = moment().format('YYYY/MM/DD HH:mm:ss'); // Esse metodo formata para o datetime atual e com 3 horas a menos
                    const perfil = new Perfil(
                        exists[0]['Nome'],
                        request.body.acessa_configuracoes,
                        exists[0]['Criado por'],
                        request.body.atualizado_por,
                        exists[0]['created_at'],
                        formattedDateTime
                    );
                    await PerfilRepository.update(perfil, nome);
                    response.json({message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async deleteByNome(request, response){
        const nome = request.params.nome;
        try {
            const exists = await PerfilRepository.findByNome(nome);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found'});
            }else{
                await PerfilRepository.delete(nome);
                response.json({message: 'Success'});
            }
        }catch (e) {
            response.json(e);
        }
    }
}
export default new PerfilController();