import connection from "../../config/database/connection.js";
import QueryObjectUtils from "../Utils/QueryObjectUtils.js";

class ArquivoRelacionadoRepository{
    findAll() {
        const sql = "SELECT * FROM `arquivo relacionado` ORDER BY id ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }
    create(arquivoRelacionado) {
        const sql = "INSERT INTO `arquivo relacionado` (Nome, Objeto, `Número do contato`, Arquivo, created_at, `Criado por`, updated_at, `Atualizado por`) VALUES (?,?,?,?,?,?,?,?);";
        return QueryObjectUtils.queryObjeto(sql, [
            arquivoRelacionado.nome,
            arquivoRelacionado.objeto,
            arquivoRelacionado.numero_contato,
            arquivoRelacionado.arquivo,
            arquivoRelacionado.created_at,
            arquivoRelacionado.criado_por,
            arquivoRelacionado.updated_at,
            arquivoRelacionado.atualizado_por
        ]);
    }
    findById(id) {
        const sql = "SELECT * FROM `Arquivo relacionado` WHERE id="+id+";";
        return QueryObjectUtils.queryObjeto(sql);
    }
    update(arquivoRelacionado, id){
        const sql = "UPDATE `Arquivo relacionado` SET Nome=?, Objeto=?, `Número do contato`=?, Arquivo=?, created_at=?,`Criado por`=?, updated_at=?, `Atualizado por`=?  WHERE id ="+id+";";
        return QueryObjectUtils.queryObjeto(sql, [
            arquivoRelacionado.nome,
            arquivoRelacionado.objeto,
            arquivoRelacionado.numero_contato,
            arquivoRelacionado.arquivo,
            arquivoRelacionado.created_at,
            arquivoRelacionado.criado_por,
            arquivoRelacionado.updated_at,
            arquivoRelacionado.atualizado_por
        ]);
    }
    delete(id){
        const sql = "DELETE FROM `Arquivo relacionado` WHERE id ="+id+";";
        return QueryObjectUtils.queryObjeto(sql);
    }
}
export default new ArquivoRelacionadoRepository();