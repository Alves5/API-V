class Produto {
    _codigo;
    _nomeProduto;
    _status;
    _criadoPor;
    _atualizadoPor;
    _created_at;
    _updated_at;

    constructor(codigo, nomeProduto, status, criadoPor, atualizadoPor, created_at, updated_at) {
        this._codigo = codigo;
        this._nomeProduto = nomeProduto;
        this._status = status;
        this._criadoPor = criadoPor;
        this._atualizadoPor = atualizadoPor;
        this._created_at = created_at;
        this._updated_at = updated_at;
    }

    get codigo(){
        return this._codigo;
    }
    get nomeCompleto(){
        return this._nomeProduto;
    }
    get status(){
        return this._status;
    }
    get criadoPor(){
        return this._criadoPor;
    }
    get atualizadoPor(){
        return this._atualizadoPor;
    }
    get created_at(){
        return this._created_at;
    }
    get updated_at(){
        return this._updated_at;
    }

    set codigo(codigo){
        this._codigo = codigo;
    }
    set nomeCompleto(nomeCompleto){
        this._nomeProduto = nomeCompleto;
    }
    set status(status){
        this._status = status;
    }
    set criadoPor(criadoPor){
        this._criadoPor = criadoPor;
    }
    set atualizadoPor(atualizadoPor){
        this._atualizadoPor = atualizadoPor;
    }
    set created_at(created_at){
        this._created_at = created_at;
    }
    set updated_at(updated_at){
        this._updated_at = updated_at;
    }
}
export default Produto;