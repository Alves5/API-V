class Contato {

    _id;
    _nome_completo;
    _numero;
    _created_at;
    _updated_at;
    _responsavel;
    _criado_por;
    _atualizado_por;
    _nacionalidade;
    _data_nascimento;
    _cpf;
    _identidade;
    _cep;
    _endereco;
    _bairro;
    _cidade;
    _estado;
    _email;

    constructor(id, nome_completo, numero, created_at, updated_at, responsavel, criado_por, atualizado_por, nacionalidade, data_nascimento, cpf, identidade, cep, endereco, bairro, cidade, estado, email) {
        this._id = id;
        this._nome_completo = nome_completo;
        this._numero = numero;
        this._created_at = created_at;
        this._updated_at = updated_at;
        this._responsavel = responsavel;
        this._criado_por = criado_por;
        this._atualizado_por = atualizado_por;
        this._nacionalidade = nacionalidade;
        this._data_nascimento = data_nascimento;
        this._cpf = cpf;
        this._identidade = identidade;
        this._cep = cep;
        this._endereco = endereco;
        this._bairro = bairro;
        this._cidade = cidade;
        this._estado = estado;
        this._email = email;
    }

    get id(){
        return this._id;
    }
    get nome_completo(){
        return this._nome_completo;
    }
    get numero(){
        return this._numero;
    }
    get created_at(){
        return this._created_at;
    }
    get updated_at(){
        return this._updated_at;
    }
    get responsavel(){
        return this._responsavel;
    }
    get criado_por(){
        return this._criado_por;
    }
    get atualizado_por(){
        return this._atualizado_por;
    }
    get nacionalidade(){
        return this._nacionalidade;
    }
    get data_nascimento(){
        return this._data_nascimento;
    }
    get cpf(){
        return this._cpf;
    }
    get identidade(){
        return this._identidade;
    }
    get cep(){
        return this._cep;
    }
    get endereco(){
        return this._endereco;
    }
    get bairro(){
        return this._bairro;
    }
    get cidade(){
        return this._cidade;
    }
    get estado(){
        return this._estado;
    }
    get email(){
        return this._email;
    }

    set id(id){
        this._id = id;
    }
    set nome_completo(nome_completo){
        this._nome_completo = nome_completo;
    }
    set numero(numero){
        this._numero = numero;
    }
    set created_at(created_at){
        this._created_at = created_at;
    }
    set updated_at(updated_at){
        this._updated_at = updated_at;
    }
    set responsavel(responsavel){
        this._responsavel = responsavel;
    }
    set criado_por(criado_por){
        this._criado_por = criado_por;
    }
    set atualizado_por(atualizado_por){
        this._atualizado_por = atualizado_por;
    }
    set nacionalidade(nacionalidade){
        this._nacionalidade = nacionalidade;
    }
    set data_nascimento(data_nascimento){
        this._data_nascimento = data_nascimento;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }
    set identidade(identidade){
        this._identidade = identidade;
    }
    set cep(cep){
        this._cep = cep;
    }
    set endereco(endereco){
        this._endereco = endereco;
    }
    set bairro(bairro){
        this._bairro = bairro;
    }
    set cidade(cidade){
        this._cidade = cidade;
    }
    set estado(estado){
        this._estado = estado;
    }
    set email(email){
        this._email = email;
    }
}

export default Contato;