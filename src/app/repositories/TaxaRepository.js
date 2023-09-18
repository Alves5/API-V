import QueryObjectUtils from "../Utils/QueryObjectUtils.js";

class TaxaRepository{
    findAll(){
        const sql = "SELECT * FROM Taxa ORDER BY id ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }

    create(taxa){
        const sql = "INSERT INTO Taxa(`Número da proposta`, `Descrição`, Valor, Moeda, created_at, updated_at, `Criado por`, `Atualizado por`, `Número do contato`) VALUES(?,?,?,?,?,?,?,?,?);"
        return QueryObjectUtils.queryObjeto(sql, [
            taxa.numero_proposta,
            taxa.descricao,
            taxa.valor,
            taxa.moeda,
            taxa.created_at,
            taxa.updated_at,
            taxa.criado_por,
            taxa.atualizado_por,
            taxa.numero_contato
        ])
    }

    findById(id){
        const sql = `SELECT * FROM Taxa WHERE id=${id};`;
        return QueryObjectUtils.queryObjeto(sql);
    }

    update(taxa, id){
        const sql = "UPDATE Taxa SET `Número da proposta`=?, `Descrição`=?, Valor=?, Moeda=?, updated_at=?, `Atualizado por`=?, `Número do contato`=? WHERE id=" + id + ";";
        return QueryObjectUtils.queryObjeto(sql, [
            taxa.numero_proposta,
            taxa.descricao,
            taxa.valor,
            taxa.moeda,
            taxa.updated_at,
            taxa.atualizado_por,
            taxa.numero_contato
        ]);
    }
    delete(id){
        const sql = `DELETE FROM Taxa WHERE id=${id};`;
        return QueryObjectUtils.queryObjeto(sql);
    }
}
export default new TaxaRepository();