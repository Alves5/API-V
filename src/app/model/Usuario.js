class Usuario{
    _id;
    _email;
    _senha;
    _perfil;
    _nome;
    _updated_at;
    _remember_token;
    _created_at;
    _criado_por;
    _atualizado_por;
    _createdAt_token;

    constructor(id, email, senha, perfil, nome, updated_at, remember_token, created_at, criado_por, atualizado_por, createdAt_token) {
        this._id = id;
        this._email = email;
        this._senha = senha;
        this._perfil = perfil;
        this._nome = nome;
        this._updated_at = updated_at;
        this._remember_token = remember_token;
        this._created_at = created_at;
        this._criado_por = criado_por;
        this._atualizado_por = atualizado_por;
        this._createdAt_token = createdAt_token;
    }

    get id(){
        return this._id;
    }
    get email(){
        return this._email;
    }
    get senha(){
        return this._senha;
    }
    get perfil(){
        return this._perfil;
    }
    get nome(){
        return this._nome;
    }
    get updated_at(){
        return this._updated_at;
    }
    get remember_token(){
        return this._remember_token;
    }
    get created_at(){
        return this._created_at;
    }
    get criado_por(){
        return this._criado_por;
    }
    get atualizado_por(){
        return this._atualizado_por;
    }
    get createdAt_token(){
        return this._createdAt_token;
    }

    set id(id){
        this._id = id;
    }
    set email(email){
        this._email = email;
    }
    set senha(senha){
        this._senha = senha;
    }
    set perfil(perfil){
        this._perfil = perfil;
    }
    set nome(nome){
        this._nome = nome;
    }
    set updated_at(updated_at){
        this._updated_at = updated_at;
    }
    set remember_token(remember_token){
        this._remember_token = remember_token;
    }
    set created_at(created_at){
        this._created_at = created_at;
    }
    set criado_por(criado_por){
        this._criado_por = criado_por;
    }
    set atualizado_por(atualizado_por){
        this._atualizado_por = atualizado_por;
    }
    set createdAt_token(createdAt_token){
        this._createdAt_token = createdAt_token;
    }
}

export default Usuario;