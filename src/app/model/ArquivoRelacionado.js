class ArquivoRelacionado{
        _id;
        _nome;
        _objeto;
        _numero_contato;
        _arquivo;
        _created_at;
        _criado_por;
        _updated_at;
        _atualizado_por;

    constructor(id, nome, objeto, numero_contato, arquivo, created_at, criado_por, updated_at, atualizado_por){
        this._id = id;
        this._nome = nome;
        this._objeto = objeto;
        this._numero_contato = numero_contato;
        this._arquivo = arquivo;
        this._created_at = created_at;
        this._criado_por = criado_por;
        this._updated_at = updated_at;
        this._atualizado_por = atualizado_por;
    }

    get id(){
        return this._id;
    }
    get nome(){
        return this._nome;
    }
    get objeto(){
        return this._objeto;
    }
    get numero_contato(){
        return this._numero_contato;
    }
    get arquivo(){
        return this._arquivo;
    }
    get created_at(){
        return this._created_at;
    }
    get criado_por(){
        return this._criado_por;
    }
    get updated_at(){
        return this._updated_at;
    }
    get atualizado_por(){
        return this._atualizado_por;
    }

    set id(id){
        this._id = id;
    }
    set nome(nome){
        this._nome = nome;
    }
    set objeto(objeto){
        this._objeto = objeto;
    }
    set numero_contato(numero_contato){
        this._numero_contato = numero_contato;
    }
    set arquivo(arquivo){
        this._arquivo = arquivo;
    }
    set created_at(created_at){
        this._created_at = created_at;
    }
    set criado_por(criado_por){
        this._criado_por = criado_por;
    }
    set updated_at(updated_at){
        this._updated_at = updated_at;
    }
    set atualizado_por(atualizado_por){
        this._atualizado_por = atualizado_por;
    }
}

export default ArquivoRelacionado;