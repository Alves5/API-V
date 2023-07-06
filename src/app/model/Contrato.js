class Contrato {
    _numero_contrato;
    _status;
    _created_at;
    _updated_at;
    _numero_contato;
    _criado_por;
    _atualizado_por;
    _numero_proposta;
    _contrato_pai;

    constructor(numero_contrato, status, created_at, updated_at, numero_contato, criado_por, atualizado_por, numero_proposta, contrato_pai) {
        this.numero_contrato = numero_contrato;
        this._status = status;
        this._created_at = created_at;
        this._updated_at = updated_at;
        this._numero_contato = numero_contato;
        this._criado_por = criado_por;
        this._atualizado_por = atualizado_por;
        this._numero_proposta = numero_proposta;
        this._contrato_pai = contrato_pai;
    }

    get numero_contrato(){
        return this._numero_contrato;
    }
    get status(){
        return this._status;
    }
    get created_at(){
        return this._created_at;
    }
    get updated_at(){
        return this._updated_at;
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
    get numero_proposta(){
        return this._numero_proposta;
    }
    get contrato_pai(){
        return this._contrato_pai;
    }

    set numero_contrato(numero_contrato){
        this._numero_contrato = numero_contrato;
    }
    set status(status){
        this._status = status;
    }
    set created_at(created_at){
        this._created_at = created_at;
    }
    set updated_at(updated_at){
        this._updated_at = updated_at;
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
    set numero_proposta(numero_proposta){
        this._numero_proposta = numero_proposta;
    }
    set contrato_pai(contrato_pai){
        this._contrato_pai = contrato_pai;
    }
}

export default Contrato;