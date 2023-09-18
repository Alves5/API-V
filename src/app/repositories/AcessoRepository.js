import QueryObjectUtils from "../Utils/QueryObjectUtils.js";
class AcessoRepository{
    findAll() {
        const sql = "SELECT * FROM Acesso ORDER BY id ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }
    create(acesso) {
        const sql = "INSERT INTO Acesso (Usuario, Registro, Objeto, Ver, Editar) VALUES (?,?,?,?,?);";
        return QueryObjectUtils.queryObjeto(sql, [
            acesso.usuario,
            acesso.registro,
            acesso.objeto,
            acesso.ver,
            acesso.editar
        ]);
    }
    findByUsuario(usuario){
        const sql = `SELECT * FROM Acesso WHERE Usuario = '${usuario}';`;
        return QueryObjectUtils.queryObjeto(sql);
    }
    update(acesso, usuario){
        const sql = `UPDATE Acesso SET Registro=?, Objeto=?, Ver=?, Editar=?  WHERE Usuario ='${usuario}';`;
        return QueryObjectUtils.queryObjeto(sql, [
            acesso.registro,
            acesso.objeto,
            acesso.ver,
            acesso.editar
        ]);
    }
    delete(usuario){
        const sql = `DELETE FROM Acesso WHERE Usuario ='${usuario}';`;
        return QueryObjectUtils.queryObjeto(sql);
    }
}
export default new AcessoRepository();