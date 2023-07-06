import QueryObjectUtils from "../Utils/QueryObjectUtils.js";

class ContatoRepository{
    findAll(){
        const sql = "SELECT * FROM Contato ORDER BY `Número` ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }

    create(contato){
        const sql = "INSERT INTO Contato(`Nome completo`, `Número`, created_at, `Responsável`, `Criado por`, Nacionalidade, `Data de nascimento`, CPF, Identidade, CEP, `Endereço`, Bairro, Cidade, Estado, Email) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
        return QueryObjectUtils.queryObjeto(sql, [
            contato.nome_completo,
            contato.numero,
            contato.created_at,
            contato.responsavel,
            contato.criado_por,
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

    findByNumero(numero){
        const sql = "SELECT * FROM Contato WHERE `Número`='" + numero + "';";
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