import QueryObjectUtils from "../Utils/QueryObjectUtils.js";
class PermissaoPerfilRepository{
    findAll(){
        const sql = "SELECT * FROM `Permissão do perfil` ORDER BY codigo ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }
    create(permissao){
        const sql = "INSERT INTO `Permissão do perfil`(codigo, Perfil, Objeto, Criar, Editar, Excluir, `Ver todos`, `Editar todos`) VALUES(?,?,?,?,?,?,?,?);"
        return QueryObjectUtils.queryObjeto(sql, [
            permissao.codigo,
            permissao.perfil,
            permissao.objeto,
            permissao.criar,
            permissao.editar,
            permissao.excluir,
            permissao.ver_todos,
            permissao.editar_todos
        ])
    }
    findByCodigo(codigo){
        const sql = "SELECT * FROM `Permissão do perfil` WHERE codigo='"+codigo+"';";
        return QueryObjectUtils.queryObjeto(sql);
    }
    update(permissao, codigo){
        const sql = "UPDATE `Permissão do perfil` SET Perfil=?, Objeto=?, Criar=?, Editar=?, Excluir=?, `Ver todos`=?, `Editar todos`=?  WHERE codigo='"+codigo+"';";
        return QueryObjectUtils.queryObjeto(sql, [
            permissao.perfil,
            permissao.objeto,
            permissao.criar,
            permissao.editar,
            permissao.excluir,
            permissao.ver_todos,
            permissao.editar_todos
        ]);
    }
    delete(codigo){
        const sql = "DELETE FROM `Permissão do perfil` WHERE codigo='"+codigo+"';";
        return QueryObjectUtils.queryObjeto(sql);
    }
}
export default new PermissaoPerfilRepository();