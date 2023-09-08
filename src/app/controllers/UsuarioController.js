import UsuarioRepository from "../repositories/UsuarioRepository.js";

class UsuarioController {
    async findAll(req, res){
        try {
            const result = await UsuarioRepository.findAll();
            res.json(result);
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res) {
        const usuario = req.body;
        const username = req.body.username;
        try {
            const exists = await UsuarioRepository.findByUsername(username);
            if (exists !== null){
                res.json({status: false, message: 'Document already created'});
            }else{
                try {
                    await UsuarioRepository.create(usuario);
                    res.json({status: true, message: 'Success'});
                }catch (e) {
                    res.json(e);
                }
            }
        }catch (e) {
            res.json(e);
        }
    }

    async findByUsername(req, res){
        const username = req.params.username;
        try {
            const result = await UsuarioRepository.findByUsername(username);
            if (result !== null){
                res.json(result);
            }else{
                res.json({status: false, message: 'Document not found'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async updateByUsername(req, res){
        const username = req.params.username;
        const usuario = req.body;
        try {
            const result = await UsuarioRepository.update(username, usuario);
            if (result.modifiedCount === 1){
                res.json({status: true, message: 'Success. Document updated'});
            }else{
                res.json({status: false, message: 'Document not found or not updated'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async deleteByUsername(req, res){
        const username = req.params.username;
        try {
            const result = await UsuarioRepository.delete(username);
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
export default new UsuarioController();