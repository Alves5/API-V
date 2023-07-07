import QueryObjectUtils from "../Utils/QueryObjectUtils.js";
class ContratoRepository{
    findAll(){
        const sql = "SELECT * FROM Contrato ORDER BY `Número do contrato` ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    };
    create(contrato){
        const sql = "INSERT INTO Contrato(`Número do contrato`, Status, created_at, updated_at, `Número do contato`, `Criado por`, `Atualizado por`, `Número da proposta`, `Contrato pai`) VALUES (?,?,?,?,?,?,?,?,?);";
        return QueryObjectUtils.queryObjeto(sql, [
            contrato.numero_contrato,
            contrato.status,
            contrato.created_at,
            contrato.updated_at,
            contrato.numero_contato,
            contrato.criado_por,
            contrato.atualizado_por,
            contrato.numero_proposta,
            contrato.contrato_pai
        ]);
    }
    findByNumeroContrato(numero){
        const sql = "SELECT * FROM Contrato WHERE `Número do contrato`='" + numero + "';";
        return QueryObjectUtils.queryObjeto(sql);
    }
    update(contrato, id){
        const sql = "UPDATE Contrato SET Status=?, created_at=?, updated_at=?, `Número do contato`=?, `Criado por`=?, `Atualizado por`=?, `Número da proposta`=?, `Contrato pai`=? WHERE `Número do contrato`='"+id+"';";
        return QueryObjectUtils.queryObjeto(sql, [
            contrato.status,
            contrato.created_at,
            contrato.updated_at,
            contrato.numero_contato,
            contrato.criado_por,
            contrato.atualizado_por,
            contrato.numero_proposta,
            contrato.contrato_pai,
        ]);
    }
    delete(id){
        const sql = "DELETE FROM Contrato WHERE `Número do contrato` ='"+id+"';";
        return QueryObjectUtils.queryObjeto(sql);
    }
    findRelatedList(number){
        const sql = "SELECT * FROM `Arquivo relacionado` WHERE `Número do contato` = '" + number + "';";
        return QueryObjectUtils.queryObjeto(sql);
    }
    generateContract(numero){
        const sql = "SELECT Contrato.*, Contato.*, Proposta.*, Parcela.* FROM Contrato " +
            "JOIN Contato ON `Contrato`.`Número do contato` = `Contato`.`Número` " +
            "JOIN Proposta ON `Contrato`.`Número da proposta` = `Proposta`.`Número da proposta` " +
            "LEFT JOIN Parcela ON `Proposta`.`Número da proposta` = `Parcela`.`Número da proposta` " +
            "WHERE `Contrato`.`Número do contrato` = '" +numero+ "';";
        return QueryObjectUtils.queryObjeto(sql);
    }

}
export default new ContratoRepository();