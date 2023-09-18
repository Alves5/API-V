import QueryObjectUtils from "../Utils/QueryObjectUtils.js";
class PerfilRepository{
    findAll(){
        const sql = "SELECT * FROM Perfil ORDER BY Nome ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }
    create(perfil){
        const sql = "INSERT INTO Perfil(Nome, `Acessa configurações`, `Criado por`, `Atualizado por`, created_at, updated_at) VALUES(?,?,?,?,?,?);"
        return QueryObjectUtils.queryObjeto(sql, [
            perfil.nome,
            perfil.acessa_configuracoes,
            perfil.criado_por,
            perfil.atualizado_por,
            perfil.created_at,
            perfil.updated_at
        ])
    }
    findByNome(nome){
        const sql = `SELECT * FROM Perfil WHERE Nome='${nome}';`;
        return QueryObjectUtils.queryObjeto(sql);
    }
    update(perfil, nome){
        const sql = "UPDATE Perfil SET `Acessa configurações`=?, `Atualizado por`=?, updated_at=?  WHERE Nome='"+nome+"';";
        return QueryObjectUtils.queryObjeto(sql, [
            perfil.acessa_configuracoes,
            perfil.atualizado_por,
            perfil.updated_at
        ]);
    }
    delete(nome){
        const sql = `DELETE FROM Perfil WHERE Nome='${nome}';`;
        return QueryObjectUtils.queryObjeto(sql);
    }

}
export default new PerfilRepository();