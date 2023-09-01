import QueryObjectUtils from "../Utils/QueryObjectUtils.js";

class UsuarioRepository{
    findAll(){
        const sql = "SELECT * FROM Usuario ORDER BY id ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }

    create(usuario){
        const sql = "INSERT INTO Usuario(email, senha, perfil, Nome, updated_at, remember_token, created_at, `Criado por`, `Atualizado por`, createdAt_token) VALUES(?,?,?,?,?,?,?,?,?,?);"
        return QueryObjectUtils.queryObjeto(sql, [
            usuario.email,
            usuario.senha,
            usuario.perfil,
            usuario.nome,
            usuario.updated_at,
            usuario.remember_token,
            usuario.created_at,
            usuario.criado_por,
            usuario.atualizado_por,
            usuario.createdAt_token
        ]);
    }

    findById(id){
        const sql = `SELECT * FROM Usuario WHERE id=${id};`;
        return QueryObjectUtils.queryObjeto(sql);
    }

    findByEmail(email){
        const sql = `SELECT * FROM Usuario WHERE email='${email}';`;
        return QueryObjectUtils.queryObjeto(sql);
    }

    update(usuario, email){
        const sql = "UPDATE Usuario SET senha=?, perfil=?, Nome=?, updated_at=?, `Atualizado por`=? WHERE email='" + email + "';";
        return QueryObjectUtils.queryObjeto(sql, [
            usuario.senha,
            usuario.perfil,
            usuario.nome,
            usuario.updated_at,
            usuario.atualizado_por
        ]);
    }

    delete(email){
        const sql = `DELETE FROM Usuario WHERE email='${email}';`;
        return QueryObjectUtils.queryObjeto(sql);
    }

    login(email, senha){
        const sql = `SELECT * FROM Usuario WHERE email='${email}' AND senha='${senha}';`;
        return QueryObjectUtils.queryObjeto(sql);
    }

    createRememberToken(usuario, email){
        const sql = `UPDATE Usuario SET remember_token=?, createdAt_token=? WHERE email='${email}';`;
        return QueryObjectUtils.queryObjeto(sql, [
            usuario.remember_token,
            usuario.createdAt_token
        ]);
    }

    validateToken(token){
        const sql = `SELECT remember_token FROM Usuario WHERE remember_token = '${token}';`;
        return QueryObjectUtils.queryObjeto(sql);
    }

    createNewPassword(senha, token){
        const sql = `UPDATE Usuario SET senha=?, remember_token=?, createdAt_token=? WHERE remember_token = '${token}';`;
        return QueryObjectUtils.queryObjeto(sql,[senha, null, null]);
    }

    updateNome(nome, updated_at, email){
        const sql = `UPDATE Usuario SET Nome=?, updated_at=? WHERE email = '${email}';`;
        return QueryObjectUtils.queryObjeto(sql, [nome, updated_at]);
    }

    findRelatedList(email){
        const sql = "SELECT * FROM Contato WHERE `Responsável`='" + email + "';";
        return QueryObjectUtils.queryObjeto(sql);
    }
}
export default new UsuarioRepository();