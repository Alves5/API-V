class Parcela {
    _id;
    _numero_parcela;
    _total_parcela;
    _valor_parcela;
    _moeda_parcela;
    _status;
    _data_pagamento_parcela;
    _numero_proposta;
    _numero_contato;
    _criado_por;
    _atualizado_por;
    _created_at;
    _updated_at;

    constructor(id, numero_parcela, total_parcela, valor_parcela, moeda_parcela, status, data_pagamento_parcela, numero_proposta, numero_contato, criado_por, atualizado_por, created_at, updated_at) {
        this._id = id;
        this._numero_parcela = numero_parcela;
        this._total_parcela = total_parcela;
        this._valor_parcela = valor_parcela;
        this._moeda_parcela = moeda_parcela;
        this._status = status;
        this._data_pagamento_parcela = data_pagamento_parcela;
        this._numero_proposta = numero_proposta;
        this._numero_contato = numero_contato;
        this._criado_por = criado_por;
        this._atualizado_por = atualizado_por;
        this._created_at = created_at;
        this._updated_at = updated_at;
    }

    get id(){
        return this._id;
    }
    get numero_parcela(){
        return this._numero_parcela;
    }
    get total_parcela(){
        return this._total_parcela;
    }
    get valor_parcela(){
        return this._valor_parcela;
    }
    get moeda_parcela(){
        return this._moeda_parcela;
    }
    get status(){
        return this._status;
    }
    get data_pagamento_parcela(){
        return this._data_pagamento_parcela;
    }
    get numero_proposta(){
        return this._numero_proposta;
    }
    get numero_contato(){
        return this._numero_contato;
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

    set id(id){
        this._id = id;
    }
    set numero_parcela(numero_parcela){
        this._numero_parcela = numero_parcela;
    }
    set total_parcela(total_parcela){
        this._total_parcela = total_parcela;
    }
    set valor_parcela(valor_parcela){
        this._valor_parcela = valor_parcela;
    }
    set moeda_parcela(moeda_parcela){
        this._moeda_parcela = moeda_parcela;
    }
    set status(status){
        this._status = status;
    }
    set data_pagamento_parcela(data_pagamento_parcela){
        this._data_pagamento_parcela = data_pagamento_parcela;
    }
    set numero_proposta(numero_proposta){
        this._numero_proposta = numero_proposta;
    }
    set numero_contato(numero_contato){
        this._numero_contato = numero_contato;
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

export default Parcela;