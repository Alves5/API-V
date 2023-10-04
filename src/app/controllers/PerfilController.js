import PerfilRepository from "../repositories/PerfilRepository.js";

class PerfilController {
    async findAll(req, res){
        try {
            const result = await PerfilRepository.findAll();
            if(Object.keys(result).length === 0){
                res.status(200).json({response: 0, message: 'Nenhum registro encontrado.'});
            }else{
                res.status(200).json({response: result, message: 'Registros encontrados com sucesso.'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res){
        const perfil = req.body;
        const nome = req.body.nome;
        try {
            const exists = await PerfilRepository.findByNome(nome);
            if (exists !== null){
                res.status(422).json({response: 0, message: "O registro já existe"});
            }else{
                try {
                    await PerfilRepository.create(perfil);
                    res.status(201).json({response: 1, message: "Registro criado com sucesso."});
                }catch (e) {
                    res.status(500).json({response: 0, errors: e});
                }
            }
        }catch (e){
            res.status(500).json({response: 0, errors: e});
        }
    }

    async findByNome(req, res){
        const nome = req.params.nome;
        try {
            const result = await PerfilRepository.findByNome(nome);
            if(result !== null){
                res.status(200).json({response: result, message: "Registro encontrado."});
            }else{
                res.status(200).json({response: 0, message: "Nenhum registro encontrado."});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async update(req, res){
        const nome = req.params.nome;
        const perfil = req.body;
        try {
            const result = await PerfilRepository.update(nome, perfil);
            if (result.modifiedCount === 1){
                res.status(200).json({response: result.modifiedCount, message: 'Sucesso, registro atualizado'});
            }else{
                res.status(200).json({response: result.modifiedCount, message: 'Registro não atualizado'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async deleteByNome(req, res){
        const nome = req.params.nome;
        try {
            const result = await PerfilRepository.delete(nome);
            if (result.deletedCount === 1){
                res.status(200).json({response: result.deletedCount, message: 'Registro deletado com sucesso'});
            }else{
                res.status(404).json({response: result.deletedCount, message: 'Registro não existe ou não deletado.'});
            }
        }catch (e) {
            res.json(e);
        }
    }
}
export default new PerfilController();