class Contrato {
    _numero_contrato;
    _status;
    _numero_contato;
    _numero_proposta;
    _documentoCliente;
    _seguroViajem;
    _visto;
    _acomodacao;
    _translado;
    _contrato_pai;
    _criado_por;
    _atualizado_por;
    _created_at;
    _updated_at;

    constructor(numero_contrato, status, numero_contato, numero_proposta, documentoCliente, seguroViajem, visto, acomodacao, translado, contrato_pai, criado_por, atualizado_por, created_at, updated_at) {
        this._numero_contrato = numero_contrato;
        this._status = status;
        this._numero_contato = numero_contato;
        this._numero_proposta = numero_proposta;
        this._documentoCliente = documentoCliente;
        this._seguroViajem = seguroViajem;
        this._visto = visto;
        this._acomodacao = acomodacao;
        this._translado = translado
        this._contrato_pai = contrato_pai;
        this._criado_por = criado_por;
        this._atualizado_por = atualizado_por;
        this._created_at = created_at;
        this._updated_at = updated_at;
    }

    get numero_contrato(){
        return this._numero_contrato;
    }
    get status(){
        return this._status;
    }
    get numero_contato(){
        return this._numero_contato;
    }
    get numero_proposta(){
        return this._numero_proposta;
    }
    get documentoCliente(){
        return this._documentoCliente;
    }
    get seguroViajem(){
        return this._seguroViajem;
    }
    get visto(){
        return this._visto;
    }
    get acomodacao(){
        return this._acomodacao;
    }
    get translado(){
        return this._translado;
    }
    get contrato_pai(){
        return this._contrato_pai;
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

    set numero_contrato(numero_contrato){
        this._numero_contrato = numero_contrato;
    }
    set status(status){
        this._status = status;
    }
    set numero_contato(numero_contato){
        this._numero_contato = numero_contato;
    }
    set numero_proposta(numero_proposta){
        this._numero_proposta = numero_proposta;
    }
    set documentoCliente(documentoCliente){
        this._documentoCliente = documentoCliente;
    }
    set seguroViajem(seguroViajem){
        this._seguroViajem = seguroViajem;
    }
    set visto(visto){
        this._visto = visto;
    }
    set acomodacao(acomodacao){
        this._acomodacao = acomodacao;
    }
    set translado(translado){
        this._translado = translado;
    }
    set contrato_pai(contrato_pai){
        this._contrato_pai = contrato_pai;
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

export default Contrato;