import QueryObjectUtils from "../Utils/QueryObjectUtils.js";

class ContatoRepository{
    findAll(){
        const sql = "SELECT * FROM \"Contato\" ORDER BY id ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }

    create(contato){
        const sql = 'INSERT INTO "Contato"("numero", "nomeCompleto", "responsavel", "nacionalidade", "dataNascimento", "cpf", "endereco", "bairro", "createdAt", "criadoPor", "identidade", "cep", "cidade", "estado", "email") VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15);'
        return QueryObjectUtils.queryObjeto(sql, [
            contato.numero,
            contato.nome_completo,
            contato.responsavel,
            contato.nacionalidade,
            contato.data_nascimento,
            contato.cpf,
            contato.endereco,
            contato.bairro,
            contato.created_at,
            contato.criado_por,
            contato.identidade,
            contato.cep,
            contato.cidade,
            contato.estado,
            contato.email
        ]);
    }

    // findById(id){
    //     const sql = 'SELECT * FROM "Contato" WHERE "id"= '$id';';
    //     return QueryObjectUtils.queryObjeto(sql, [id]);
    // }

    findByNumero(numero){
        const sql = "SELECT * FROM \"Contato\" WHERE numero = '"+ numero +"';";
        return QueryObjectUtils.queryObjeto(sql);
    }

    update(contato, numero){
        const sql = "UPDATE Contato SET `Nome completo`=?, updated_at=?, `Responsável`=?, `Atualizado por`=?, Nacionalidade=?, `Data de nascimento`=?, CPF=?, Identidade=?, CEP=?, `Endereço`=?, Bairro=?, Cidade=?, Estado=?, Email=? WHERE `Número`='" + numero + "';";
        return QueryObjectUtils.queryObjeto(sql, [
            contato.nome_completo,
            contato.updated_at,
            contato.responsavel,
            contato.atualizado_por,
            contato.nacionalidade,
            contato.data_nascimento,
            contato.cpf,
            contato.identidade,
            contato.cep,
            contato.endereco,
            contato.bairro,
            contato.cidade,
            contato.estado,
            contato.email
        ]);
    }
    delete(numero){
        const sql = "DELETE FROM Contato WHERE `Número`='" + numero + "';";
        return QueryObjectUtils.queryObjeto(sql);
    }

    findRelatedList(obj, number){
        const sql = "SELECT * FROM `" + obj + "` WHERE `Número do contato` = '" + number + "';";
        return QueryObjectUtils.queryObjeto(sql);
    }
}
export default new ContatoRepository();