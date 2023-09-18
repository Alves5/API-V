import QueryObjectUtils from "../Utils/QueryObjectUtils.js";

class PropostaRepository {
    findAll() {
        const sql = "SELECT * FROM Proposta ORDER BY `Número da proposta` ASC;";
        return QueryObjectUtils.queryObjeto(sql);
    }

    create(proposta) {
        const sql = "INSERT INTO Proposta(`Criado por`, `Atualizado por`, `created_at`, `updated_at`, `Número do contato`, `Fase`, `País`, `Cidade`, `Instituição`," +
            "`Tipo do curso`, `Valor do curso`, `Turma do curso`, `Duração do curso`, `Carga horária do curso`, `Tipo de acomodação`, `Duração da acomodação`, `Valor da acomodação`, " +
            "`Descrição da taxa de acomodação`, `Taxa de acomodação`, `Descrição da agência da acomodação`, `Agência da acomodação`, `Câmbio`, `Total por pessoa`, `Moeda do contratante`, " +
            "`Símbolo da moeda do contratante`, `Moeda do destino`, `Símbolo da moeda do destino`, `Data prevista de embarque`, `Data máxima de embarque`, `Taxa de desistência do aluno`, " +
            "`Tipo de pagamento`, `Valor da entrada`, `Data da entrada`, `Tipo de pagamento da entrada`, `Quantidade de parcelas`, `Tipo de pagamento da parcela`, `Número da proposta`) " +
            "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        return QueryObjectUtils.queryObjeto(sql, [
            proposta.criado_por, proposta.atualizado_por, proposta.created_at, proposta.updated_at, proposta.numero_contato, proposta.fase, proposta.pais, proposta.cidade, proposta.instituicao,
            proposta.tipo_curso, proposta.valor_curso, proposta.turma_curso, proposta.duracao_curso, proposta.carga_horaria_curso, proposta.tipo_acomodacao, proposta.duracao_acomodacao,
            proposta.valor_acomodacao, proposta.descricao_taxa_acomodacao, proposta.taxa_acomodacao, proposta.descricao_agencia_acomodacao, proposta.agencia_acomodacao, proposta.cambio_c, proposta.total_pessoa,
            proposta.moeda_contratante, proposta.simbolo_moeda_contratante, proposta.moeda_destino, proposta.simbolo_moeda_destino, proposta.data_prevista_embarque, proposta.data_maxima_embarque,
            proposta.taxa_desistencia_aluno, proposta.tipo_pagamento, proposta.valor_entrada, proposta.data_entrada, proposta.tipo_pagamento_entrada, proposta.quantidade_parcela, proposta.tipo_pagamento_parcela,
            proposta.numero_proposta
        ]);
    }

    findByNumeroProposta(numero) {
        const sql = "SELECT * FROM Proposta WHERE `Número da proposta`='"+numero+"';";
        return QueryObjectUtils.queryObjeto(sql);
    }

    update(proposta, numero) {
        const sql = "UPDATE Proposta  SET `Atualizado por`=?,`updated_at`=?,`Número do contato`=?,`Fase`=?,`País`=?,`Cidade`=?,`Instituição`=?,`Tipo do curso`=?," +
            "`Valor do curso`=?,`Turma do curso`=?,`Duração do curso`=?,`Carga horária do curso`=?,`Tipo de acomodação`=?,`Duração da acomodação`=?,`Valor da acomodação`=?,`Descrição da taxa de acomodação`=?," +
            "`Taxa de acomodação`=?,`Descrição da agência da acomodação`=?,`Agência da acomodação`=?,`Câmbio`=?,`Total por pessoa`=?,`Moeda do contratante`=?,`Símbolo da moeda do contratante`=?,`Moeda do destino`=?," +
            "`Símbolo da moeda do destino`=?,`Data prevista de embarque`=?,`Data máxima de embarque`=?,`Taxa de desistência do aluno`=?,`Tipo de pagamento`=?,`Valor da entrada`=?,`Data da entrada`=?," +
            "`Tipo de pagamento da entrada`=?,`Quantidade de parcelas`=?,`Tipo de pagamento da parcela`=? WHERE `Número da proposta`='"+numero+"';";
        return QueryObjectUtils.queryObjeto(sql, [
            proposta.atualizado_por, proposta.updated_at, proposta.numero_contato, proposta.fase, proposta.pais, proposta.cidade, proposta.instituicao,
            proposta.tipo_curso, proposta.valor_curso, proposta.turma_curso, proposta.duracao_curso, proposta.carga_horaria_curso, proposta.tipo_acomodacao, proposta.duracao_acomodacao,
            proposta.valor_acomodacao, proposta.descricao_taxa_acomodacao, proposta.taxa_acomodacao, proposta.descricao_agencia_acomodacao, proposta.agencia_acomodacao, proposta.cambio_c, proposta.total_pessoa,
            proposta.moeda_contratante, proposta.simbolo_moeda_contratante, proposta.moeda_destino, proposta.simbolo_moeda_destino, proposta.data_prevista_embarque, proposta.data_maxima_embarque,
            proposta.taxa_desistencia_aluno, proposta.tipo_pagamento, proposta.valor_entrada, proposta.data_entrada, proposta.tipo_pagamento_entrada, proposta.quantidade_parcela, proposta.tipo_pagamento_parcela
        ]);
    }

    delete(numero) {
        const sql = "DELETE FROM Proposta WHERE `Número da proposta` = '"+numero+"';";
        return QueryObjectUtils.queryObjeto(sql);
    }

    findRelatedList(obj, number){
        const sql = "SELECT * FROM `" + obj + "` WHERE `Número da proposta` = '" + number + "';";
        return QueryObjectUtils.queryObjeto(sql);
    }
}

export default new PropostaRepository();