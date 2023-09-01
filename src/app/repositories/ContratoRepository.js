import QueryObjectUtils from "../Utils/QueryObjectUtils.js";
class ContratoRepository{
    findAll(){
        const sql = "SELECT * FROM \"Contrato\" ORDER BY \"numeroContrato\" ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    };
    create(contrato){
        const sql = 'INSERT INTO "Contrato"("numeroContrato", "status", "numeroContato", "numeroProposta", "documentoCliente", "seguroViajem", "visto", "acomodacao", "translado", "contratoPai", "criadoPor", "createdAt") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);';
        return QueryObjectUtils.queryObjeto(sql, [
            contrato.numero_contrato,
            contrato.status,
            contrato.numero_contato,
            contrato.numero_proposta,
            contrato.documentoCliente,
            contrato.seguroViajem,
            contrato.visto,
            contrato.acomodacao,
            contrato.translado,
            contrato.contrato_pai,
            contrato.criado_por,
            contrato.created_at,
        ]);
    }
    findByNumeroContrato(numero){
        const sql = "SELECT * FROM \"Contrato\" WHERE \"numeroContrato\"='" + numero + "';";
        return QueryObjectUtils.queryObjeto(sql);
    }
    update(contrato, numero){
        const sql = "UPDATE \"Contrato\" SET \"status\"=$1, \"numeroContato\"=$2, \"numeroProposta\"=$3, \"documentoCliente\"=$4, \"seguroViajem\"=$5, \"visto\"=$6, \"acomodacao\"=$7, \"translado\"=$8, \"contratoPai\"=$9, \"atualizadoPor\"=$10, \"updatedAt\"=$11 WHERE \"numeroContrato\"='" + numero + "';";
        return QueryObjectUtils.queryObjeto(sql, [
            contrato.status,
            contrato.numero_contrato,
            contrato.numero_proposta,
            contrato.documentoCliente,
            contrato.seguroViajem,
            contrato.visto,
            contrato.acomodacao,
            contrato.translado,
            contrato.contrato_pai,
            contrato.atualizado_por,
            contrato.updated_at
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