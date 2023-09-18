import AcessoRepository from "../repositories/AcessoRepository.js";
import Acesso from "../model/Acesso.js";
class AcessoController {
    async findAll(request, response) {
        try {
            const result = await AcessoRepository.findAll();
            response.json(result);
        } catch (error) {
            response.json(error);
        }
    }

    async store(request, response) {
        const usuario = request.body.usuario;
        try {
            const exists = await AcessoRepository.findByUsuario(usuario);
            if (Object.keys(exists).length != 0){
                response.json({message: 'User already exists'});
            }else{
                try {
                    const acesso = new Acesso(
                        null,
                        request.body.usuario,
                        request.body.registro,
                        request.body.objeto,
                        request.body.ver,
                        request.body.editar
                    );
                    await AcessoRepository.create(acesso);
                    response.json({message: 'Success'});
                } catch (error) {
                    response.json(error);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findByUsuario(request, response) {
        try {
            const usuario = request.params.usuario;
            const result = await AcessoRepository.findByUsuario(usuario);
            if (Object.keys(result).length == 0) {
                response.json({message: "User not found"});
            } else {
                response.json(result);
            }
        } catch (e) {
            response.json(e);
        }
    }

    async updateByUsuario(request, response) {
        const usuario = request.params.usuario;
        try {
            const exists = await AcessoRepository.findByUsuario(usuario);
            if (Object.keys(exists).length == 0) {
                response.json({message: "ID not found"});
            } else {
                try {
                    const acesso = new Acesso(
                        null,
                        null,
                        request.body.registro,
                        request.body.objeto,
                        request.body.ver,
                        request.body.editar
                    );
                    await AcessoRepository.update(acesso, usuario);
                    response.json({message: "Success"});
                } catch (e) {
                    response.json(e);
                }
            }
        } catch (e) {
            response.json(e);
        }
    }

    async deleteByUsuario(request, response) {
        const usuario = request.params.usuario;
        try {
            const exists = await AcessoRepository.findByUsuario(usuario);
            if (Object.keys(exists).length == 0) {
                response.json({ message: "ID not found" });
            } else {
                await AcessoRepository.delete(usuario);
                response.json({ message: "Success" });
            }
        } catch (error) {
            response.json(error);
        }
    }
}

export default new AcessoController();