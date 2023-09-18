import QueryObjectUtils from "../Utils/QueryObjectUtils.js";
class ArquivoRepository{
    findAll() {
        const sql = "SELECT * FROM Arquivo ORDER BY id ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }

    create(arquivo) {
        const sql = "INSERT INTO Arquivo (name, content, created_at, updated_at, mime_type) VALUES (?,?,?,?,?);";
        return QueryObjectUtils.queryObjeto(sql, [
            arquivo.name,
            arquivo.content,
            arquivo.created_at,
            arquivo.updated_at,
            arquivo.mime_type
        ]);
    }

    findById(id) {
        const sql = `SELECT * FROM Arquivo WHERE id = ${id};`;
        return QueryObjectUtils.queryObjeto(sql);
    }

    update(arquivo, id){
        const sql = `UPDATE Arquivo SET name=?, content=?, created_at=?, updated_at=?, mime_type=?  WHERE id = ${id};`;
        return QueryObjectUtils.queryObjeto(sql, [
            arquivo.name,
            arquivo.content,
            arquivo.created_at,
            arquivo.updated_at,
            arquivo.mime_type
        ]);
    }

    delete(id){
        const sql = `DELETE FROM Arquivo WHERE id = ${id};`;
        return QueryObjectUtils.queryObjeto(sql);
    }
}
export default new ArquivoRepository();