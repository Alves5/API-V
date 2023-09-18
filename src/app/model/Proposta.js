class Proposta {
    _numero_proposta;
    _numero_contato;
    _fase;
    _pais;
    _cidade;
    _instituicao;
    _tipo_curso;
    _valor_curso;
    _turma_curso;
    _duracao_curso;
    _carga_horaria_curso;
    _tipo_acomodacao;
    _duracao_acomodacao;
    _valor_acomodacao;
    _descricao_taxa_acomodacao;
    _taxa_acomodacao;
    _descricao_agencia_acomodacao;
    _agencia_acomodacao;
    _cambio_c;
    _total_pessoa;
    _moeda_contratante;
    _simbolo_moeda_contratante;
    _moeda_destino;
    _simbolo_moeda_destino;
    _data_prevista_embarque;
    _data_maxima_embarque;
    _taxa_desistencia_aluno;
    _tipo_pagamento;
    _valor_entrada;
    _data_entrada;
    _tipo_pagamento_entrada;
    _quantidade_parcela;
    _tipo_pagamento_parcela;
    _criado_por;
    _atualizado_por;
    _created_at;
    _updated_at;

    constructor(numero_proposta, numero_contato, fase, pais, cidade, instituicao, tipo_curso, valor_curso, turma_curso, duracao_curso, carga_horaria_curso, tipo_acomodacao, duracao_acomodacao,
        valor_acomodacao, descricao_taxa_acomodacao, taxa_acomodacao, descricao_agencia_acomodacao, agencia_acomodacao, cambio_c, total_pessoa, moeda_contratante, simbolo_moeda_contratante, moeda_destino,
        simbolo_moeda_destino, data_prevista_embarque, data_maxima_embarque, taxa_desistencia_aluno, tipo_pagamento, valor_entrada, data_entrada, tipo_pagamento_entrada, quantidade_parcela, tipo_pagamento_parcela, criado_por, atualizado_por, created_at, updated_at) {
        this._numero_proposta = numero_proposta;
        this._numero_contato = numero_contato;
        this._fase = fase;
        this._pais = pais;
        this._cidade = cidade;
        this._instituicao = instituicao;
        this._tipo_curso = tipo_curso;
        this._valor_curso = valor_curso;
        this._turma_curso = turma_curso;
        this._duracao_curso = duracao_curso;
        this._carga_horaria_curso = carga_horaria_curso;
        this._tipo_acomodacao = tipo_acomodacao;
        this._duracao_acomodacao = duracao_acomodacao;
        this._valor_acomodacao = valor_acomodacao;
        this._descricao_taxa_acomodacao = descricao_taxa_acomodacao;
        this._taxa_acomodacao = taxa_acomodacao;
        this._descricao_agencia_acomodacao = descricao_agencia_acomodacao;
        this._agencia_acomodacao = agencia_acomodacao;
        this._cambio_c = cambio_c;
        this._total_pessoa = total_pessoa;
        this._moeda_contratante = moeda_contratante;
        this._simbolo_moeda_contratante = simbolo_moeda_contratante;
        this._moeda_destino = moeda_destino;
        this._simbolo_moeda_destino = simbolo_moeda_destino;
        this._data_prevista_embarque = data_prevista_embarque;
        this._data_maxima_embarque = data_maxima_embarque;
        this._taxa_desistencia_aluno = taxa_desistencia_aluno;
        this._tipo_pagamento = tipo_pagamento;
        this._valor_entrada = valor_entrada;
        this._data_entrada = data_entrada;
        this._tipo_pagamento_entrada = tipo_pagamento_entrada;
        this._quantidade_parcela = quantidade_parcela;
        this._tipo_pagamento_parcela = tipo_pagamento_parcela;
        this._criado_por = criado_por;
        this._atualizado_por = atualizado_por;
        this._created_at = created_at;
        this._updated_at = updated_at;
    }

    get numero_proposta(){
        return this._numero_proposta;
    }
    get numero_contato(){
        return this._numero_contato;
    }
    get fase(){
        return this._fase;
    }
    get pais(){
        return this._pais;
    }
    get cidade(){
        return this._cidade;
    }
    get instituicao(){
        return this._instituicao;
    }
    get tipo_curso(){
        return this._tipo_curso;
    }
    get valor_curso(){
        return this._valor_curso;
    }
    get turma_curso(){
        return this._turma_curso;
    }
    get duracao_curso(){
        return this._duracao_curso;
    }
    get carga_horaria_curso(){
        return this._carga_horaria_curso;
    }
    get tipo_acomodacao(){
        return this._tipo_acomodacao;
    }
    get duracao_acomodacao(){
        return this._duracao_acomodacao;
    }
    get valor_acomodacao(){
        return this._valor_acomodacao;
    }
    get descricao_taxa_acomodacao(){
        return this._descricao_taxa_acomodacao;
    }
    get taxa_acomodacao(){
        return this._taxa_acomodacao;
    }
    get descricao_agencia_acomodacao(){
        return this._descricao_agencia_acomodacao;
    }
    get agencia_acomodacao(){
        return this._agencia_acomodacao;
    }
    get cambio_c(){
        return this._cambio_c;
    }
    get total_pessoa(){
        return this._total_pessoa;
    }
    get moeda_contratante(){
        return this._moeda_contratante;
    }
    get simbolo_moeda_contratante(){
        return this._simbolo_moeda_contratante;
    }
    get moeda_destino(){
        return this._moeda_destino;
    }
    get simbolo_moeda_destino(){
        return this._simbolo_moeda_destino;
    }
    get data_prevista_embarque(){
        return this._data_prevista_embarque;
    }
    get data_maxima_embarque(){
        return this._data_maxima_embarque;
    }
    get taxa_desistencia_aluno(){
        return this._taxa_desistencia_aluno;
    }
    get tipo_pagamento(){
        return this._tipo_pagamento;
    }
    get valor_entrada(){
        return this._valor_entrada;
    }
    get data_entrada(){
        return this._data_entrada;
    }
    get tipo_pagamento_entrada(){
        return this._tipo_pagamento_entrada;
    }
    get quantidade_parcela(){
        return this._quantidade_parcela;
    }
    get tipo_pagamento_parcela(){
        return this._tipo_pagamento_parcela;
    }
    get criado_por(){
        return this._criado_por;
    }
    get atualizado_por(){
        return this._atualizado_por;
    }
    get created_at(){
        return this._created_at;
    }
    get updated_at(){
        return this._updated_at;
    }

    set numero_proposta(numero_proposta){
        this._numero_proposta = numero_proposta;
    }
    set numero_contato(numero_contato){
        this._numero_contato = numero_contato;
    }
    set fase(fase){
        this._fase = fase;
    }
    set pais(pais){
        this._pais = pais;
    }
    set cidade(cidade){
        this._cidade = cidade;
    }
    set instituicao(instituicao){
        this._instituicao = instituicao;
    }
    set tipo_curso(tipo_curso){
        this._tipo_curso = tipo_curso;
    }
    set valor_curso(valor_curso){
        this._valor_curso = valor_curso;
    }
    set turma_curso(turma_curso){
        this._turma_curso = turma_curso;
    }
    set duracao_curso(duracao_curso){
        this._duracao_curso = duracao_curso;
    }
    set carga_horaria_curso(carga_horaria_curso){
        this._carga_horaria_curso = carga_horaria_curso;
    }
    set tipo_acomodacao(tipo_acomodacao){
        this._tipo_acomodacao = tipo_acomodacao;
    }
    set duracao_acomodacao(duracao_acomodacao){
        this._duracao_acomodacao = duracao_acomodacao;
    }
    set valor_acomodacao(valor_acomodacao){
        this._valor_acomodacao = valor_acomodacao;
    }
    set descricao_taxa_acomodacao(descricao_taxa_acomodacao){
        this._descricao_taxa_acomodacao = descricao_taxa_acomodacao;
    }
    set taxa_acomodacao(taxa_acomodacao){
        this._taxa_acomodacao = taxa_acomodacao;
    }
    set descricao_agencia_acomodacao(descricao_agencia_acomodacao){
        this._descricao_agencia_acomodacao = descricao_agencia_acomodacao;
    }
    set agencia_acomodacao(agencia_acomodacao){
        this._agencia_acomodacao = agencia_acomodacao;
    }
    set cambio_c(cambio_c){
        this._cambio_c = cambio_c;
    }
    set total_pessoa(total_pessoa){
        this._total_pessoa = total_pessoa;
    }
    set moeda_contratante(moeda_contratante){
        this._moeda_contratante = moeda_contratante;
    }
    set simbolo_moeda_contratante(simbolo_moeda_contratante){
        this._simbolo_moeda_contratante = simbolo_moeda_contratante;
    }
    set moeda_destino(moeda_destino){
        this._moeda_destino = moeda_destino;
    }
    set simbolo_moeda_destino(simbolo_moeda_destino){
        this._simbolo_moeda_destino = simbolo_moeda_destino;
    }
    set data_prevista_embarque(data_prevista_embarque){
        this._data_prevista_embarque = data_prevista_embarque;
    }
    set data_maxima_embarque(data_maxima_embarque){
        this._data_maxima_embarque = data_maxima_embarque;
    }
    set taxa_desistencia_aluno(taxa_desistencia_aluno){
        this._taxa_desistencia_aluno = taxa_desistencia_aluno;
    }
    set tipo_pagamento(tipo_pagamento){
        this._tipo_pagamento = tipo_pagamento;
    }
    set valor_entrada(valor_entrada){
        this._valor_entrada = valor_entrada;
    }
    set data_entrada(data_entrada){
        this._data_entrada = data_entrada;
    }
    set tipo_pagamento_entrada(tipo_pagamento_entrada){
        this._tipo_pagamento_entrada = tipo_pagamento_entrada;
    }
    set quantidade_parcela(quantidade_parcela){
        this._quantidade_parcela = quantidade_parcela;
    }
    set tipo_pagamento_parcela(tipo_pagamento_parcela){
        this._tipo_pagamento_parcela = tipo_pagamento_parcela;
    }
    set criado_por(criado_por){
        this._criado_por = criado_por;
    }
    set atualizado_por(atualizado_por){
        this._atualizado_por = atualizado_por;
    }
    set created_at(created_at){
        this._created_at = created_at;
    }
    set updated_at(updated_at){
        this._updated_at = updated_at;
    }
}

export default Proposta;