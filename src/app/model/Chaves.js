class Chaves{
    _id;
    _chave;
    _producao;
    _sandbox;
    _updated_at;

    constructor(id, chave, producao, sandbox, updated_at){
        this._id = id;
        this._chave = chave;
        this._producao = producao;
        this._sandbox = sandbox;
        this._updated_at = updated_at;
    }

    get id(){
        return this._id;
    }
    get chave(){
        return this._chave;
    }
    get producao(){
        return this._producao;
    }
    get sandbox(){
        return this._sandbox;
    }
    get updated_at(){
        return this._updated_at;
    }

    set id(id){
        this._id = id;
    }
    set chave(chave){
        this._chave = chave;
    }
    set producao(producao){
        this._producao = producao;
    }
    set sandbox(sandbox){
        this._sandbox = sandbox;
    }
    set updated_at(updated_at){
        this._updated_at = updated_at;
    }
}

export default Chaves;