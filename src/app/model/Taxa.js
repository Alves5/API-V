class Taxa {
    _id;
    _numero_proposta;
    _descricao;
    _valor;
    _moeda;
    _created_at;
    _updated_at;
    _criado_por;
    _atualizado_por;
    _numero_contato;

    constructor(id, numero_proposta, descricao, valor, moeda, created_at, updated_at, criado_por, atualizado_por, numero_contato) {
        this._id = id;
        this._numero_proposta = numero_proposta;
        this._descricao = descricao;
        this._valor = valor;
        this._moeda = moeda;
        this._created_at = created_at;
        this._updated_at = updated_at;
        this._criado_por = criado_por;
        this._atualizado_por = atualizado_por;
        this._numero_contato = numero_contato;
    }

    get id(){
        return this._id;
    }
    get numero_proposta(){
        return this._numero_proposta;
    }
    get descricao(){
        return this._descricao;
    }
    get valor(){
        return this._valor;
    }
    get moeda(){
        return this._moeda;
    }
    get created_at(){
        return this._created_at;
    }
    get updated_at(){
        return this._updated_at;
    }
    get criado_por(){
        return this._criado_por;
    }
    get atualizado_por(){
        return this._atualizado_por;
    }
    get numero_contato(){
        return this._numero_contato;
    }

    set id(id){
        this._id = id;
    }
    set numero_proposta(numero_proposta){
        this._numero_proposta = numero_proposta;
    }
    set descricao(descricao){
        this._descricao = descricao;
    }
    set valor(valor){
        this._valor = valor;
    }
    set moeda(moeda){
        this._moeda = moeda;
    }
    set created_at(created_at){
        this._created_at = created_at;
    }
    set updated_at(updated_at){
        this._updated_at = updated_at;
    }
    set criado_por(criado_por){
        this._criado_por = criado_por;
    }
    set atualizado_por(atualizado_por){
        this._atualizado_por = atualizado_por;
    }
    set numero_contato(numero_contato){
        this._numero_contato = numero_contato;
    }
}

export default Taxa;