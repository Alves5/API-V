class Perfil{
    _nome;
    _acessa_configuracoes;
    _criado_por;
    _atualizado_por;
    _created_at;
    _updated_at;

    constructor(nome, acessa_configuracoes, criado_por, atualizado_por, created_at, updated_at){
        this._nome = nome;
        this._acessa_configuracoes = acessa_configuracoes;
        this._criado_por = criado_por;
        this._atualizado_por = atualizado_por;
        this._created_at = created_at;
        this._updated_at = updated_at;
    }

    get nome(){
        return this._nome;
    }
    get acessa_configuracoes(){
        return this._acessa_configuracoes;
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

    set nome(nome){
        this._nome = nome;
    }
    set acessa_configuracoes(acessa_configuracoes){
        this._acessa_configuracoes = acessa_configuracoes;
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

export default Perfil;