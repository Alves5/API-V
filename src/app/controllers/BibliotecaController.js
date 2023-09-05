import BibliotecaRepository from "../repositories/BibliotecaRepository.js";
import ContatoMongoRepository from "../repositories/ContatoMongoRepository.js";
class BibliotecaController {
    async findAll(req, res){
        try {
            const result = await BibliotecaRepository.findAll();
            res.json(result);
        }catch (e) {
            res.json(e);
        }
    }

    async store(req, res){
        const biblioteca = req.body;
        const codigo = req.body.codigo;
        try {
            const exists = await BibliotecaRepository.findByCodigo(codigo);
            if(exists !== null){
                res.json({status: false, message: "Document already created"});
            }else{
                try {
                    await BibliotecaRepository.create(biblioteca);
                    res.json({status: true, message: 'Success. Document created'});
                }catch (e) {
                    res.json(e);
                }
            }
        }catch (e) {
            res.json(e);
        }
    }

    async findByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const result = await BibliotecaRepository.findByCodigo(codigo);
            if (result !== null){
                res.json(result);
            }else{
                res.json({status: false, message: 'Document not found'});
            }
        }catch (e) {
            res.json(e);
        }
    }

    async updateByCodigo(req, res){
        const codigo = req.params.codigo;
        const biblioteca = req.body;
        try {
            const exists = await BibliotecaRepository.findByCodigo(codigo);
            if (exists === null){
                res.json({status: false, message: 'Document not found'});
            }else{
                try {
                    await BibliotecaRepository.update(codigo, biblioteca);
                    res.json({status: true, message: 'Success. Updated document'})
                }catch (e) {
                    res.json(e);
                }
            }
        }catch (e) {
            res.json(e);
        }
    }

    async deleteByCodigo(req, res){
        const codigo = req.params.codigo;
        try {
            const exists = await BibliotecaRepository.findByCodigo(codigo);
            if (exists === null){
                res.json({status: false, message: 'Document not found'});
            }else{
                try {
                    await BibliotecaRepository.delete(codigo);
                    res.json({status: true, message: 'Success. Deleted document'})
                }catch (e) {
                    res.json(e);
                }
            }
        }catch (e) {
            res.json(e);
        }
    }
}
export default new BibliotecaController();