import PerfilRepository from "../repositories/PerfilRepository.js";

class PerfilController {
    async findAll(req, res){
        try {
            const result = await PerfilRepository.findAll();
            (Object.keys(result).length !== 0) ? res.json(result) : res.json({status: false, message: 'No documents found'});
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
                res.json({status: false, message: "Document already created"});
            }else{
                try {
                    await PerfilRepository.create(perfil);
                    res.json({status: true, message: 'Success'});
                }catch (e) {
                    res.json(e);
                }
            }
        }catch (e){
            res.json(e);
        }
    }

    async findByNome(req, res){
        const nome = req.params.nome;
        try {
            const result = await PerfilRepository.findByNome(nome);
            (result !== null) ? res.json(result) : res.json({status: false, message: 'Document not found'});
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
                res.json({status: true, message: 'Success. Document updated'});
            }else{
                res.json({status: false, message: 'Document not found or not updated'});
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
                res.json({status: true, message: 'Success. Deleted document'})
            }else{
                res.json({status: false, message: 'Document not found or not deleted'});
            }
        }catch (e) {
            res.json(e);
        }
    }
}
export default new PerfilController();