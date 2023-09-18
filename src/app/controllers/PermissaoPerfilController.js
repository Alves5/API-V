import PermissaoPerfilRepository from "../repositories/PermissaoPerfilRepository.js";
import PermissaoPerfil from "../model/PermissaoPerfil.js";
import ChavesRepository from "../repositories/ChavesRepository.js";

class PermissaoPerfilController{
    async findAll(request, response){
        try {
            const result = await PermissaoPerfilRepository.findAll();
            response.json(result);
        }catch (e){
            response.json(e);
        }
    }

    async store(request, response){
        const codigo = request.body.codigo;
        try {
            const exists = await PermissaoPerfilRepository.findByCodigo(codigo);
            if (Object.keys(exists).length != 0){
                response.json({status: 200, message: 'Profile permission already exists'});
            }else{
                try {
                    const permissao = new PermissaoPerfil(
                        request.body.codigo,
                        request.body.perfil,
                        request.body.objeto,
                        request.body.criar,
                        request.body.editar,
                        request.body.excluir,
                        request.body.ver_todos,
                        request.body.editar_todos,
                    );
                    await PermissaoPerfilRepository.create(permissao);
                    response.json({message: 'Success'});
                } catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async findByCodigo(request, response){
        const codigo = request.params.codigo;
        try{
            const result = await PermissaoPerfilRepository.findByCodigo(codigo);
            Object.keys(result).length == 0 ? response.json({ message: "ID not found" }) : response.json(result);
        }catch (e) {
            response.json(e);
        }
    }

    async updateByCodigo(request, response){
        const codigo = request.params.codigo;
        try {
            const exists = await PermissaoPerfilRepository.findByCodigo(codigo);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found'});
            }else{
                try {
                    const permissao = new PermissaoPerfil(
                        null,
                        request.body.perfil,
                        request.body.objeto,
                        request.body.criar,
                        request.body.editar,
                        request.body.excluir,
                        request.body.ver_todos,
                        request.body.editar_todos,
                    );
                    await PermissaoPerfilRepository.update(permissao, codigo);
                    response.json({message: 'Success'});
                }catch (e) {
                    response.json(e);
                }
            }
        }catch (e) {
            response.json(e);
        }
    }

    async deleteByCodigo(request, response){
        const codigo = request.params.codigo;
        try {
            const exists = await PermissaoPerfilRepository.findByCodigo(codigo);
            if (Object.keys(exists).length == 0){
                response.json({message: 'ID not found!'});
            }else{
                await PermissaoPerfilRepository.delete(codigo);
                response.json({message: 'Success'});
            }
        }catch (e) {
            response.json(e);
        }
    }

}
export default new PermissaoPerfilController();