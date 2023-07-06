import QueryObjectUtils from "../Utils/QueryObjectUtils.js";
class ChavesRepository{
    findAll(){
        const sql = "SELECT * FROM Chaves ORDER BY id ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }

    create(chaves){
        const sql = "INSERT INTO Chaves(chave, `produção`, sandbox, updated_at) VALUES(?,?,?,?);"
        return QueryObjectUtils.queryObjeto(sql, [
            chaves.chave,
            chaves.producao,
            chaves.sandbox,
            chaves.updated_at
        ]);
    }

    findById(id){
        const sql = `SELECT * FROM Chaves WHERE id=${id};`;
        return QueryObjectUtils.queryObjeto(sql);
    }

    update(chaves, id){
        const sql = "UPDATE Chaves SET chave=?, `produção`=?, sandbox=?, updated_at=?  WHERE id="+id+";";
        return QueryObjectUtils.queryObjeto(sql, [
            chaves.chave,
            chaves.producao,
            chaves.sandbox,
            chaves.updated_at
        ]);
    }
    delete(id){
        const sql = `DELETE FROM Chaves WHERE id=${id};`;
        return QueryObjectUtils.queryObjeto(sql);
    }
}
export default new ChavesRepository();