import QueryObjectUtils from "../Utils/QueryObjectUtils.js";

class ParcelaRepository{
    findAll() {
        const sql = "SELECT * FROM Parcela ORDER BY id ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }
    create(parcela){
        const sql = "INSERT INTO Parcela (`Número da parcela`,`Total de parcelas`,`Valor da parcela`,`Moeda da parcela`, Status,`Data do pagamento da parcela`,`Número da proposta`,`Número do contato`,`Criado por`, `Atualizado por`, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);";
        return QueryObjectUtils.queryObjeto(sql, [
            parcela.numero_parcela,
            parcela.total_parcela,
            parcela.valor_parcela,
            parcela.moeda_parcela,
            parcela.status,
            parcela.data_pagamento_parcela,
            parcela.numero_proposta,
            parcela.numero_contato,
            parcela.criado_por,
            parcela.atualizado_por,
            parcela.created_at,
            parcela.updated_at
        ]);
    }
    findByNumero(numero){
        const sql = "SELECT * FROM Parcela WHERE `Número da parcela`=" +numero+ ";";
        return QueryObjectUtils.queryObjeto(sql);
    }
    update(parcela, numero){
        const sql = "UPDATE Parcela SET `Total de parcelas`=?,`Valor da parcela`=?,`Moeda da parcela`=?, Status=?,`Data do pagamento da parcela`=?,`Número da proposta`=?,`Número do contato`=?,`Atualizado por`=?, updated_at=? WHERE `Número da parcela`=" +numero+ ";";
        return QueryObjectUtils.queryObjeto(sql, [
            parcela.total_parcela,
            parcela.valor_parcela,
            parcela.moeda_parcela,
            parcela.status,
            parcela.data_pagamento_parcela,
            parcela.numero_proposta,
            parcela.numero_contato,
            parcela.atualizado_por,
            parcela.updated_at
        ]);
    }
    delete(numero){
        const sql = "DELETE FROM Parcela WHERE `Número da parcela`=" +numero+ ";";
        return QueryObjectUtils.queryObjeto(sql);
    }
}
export default new ParcelaRepository();