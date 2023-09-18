class PermissaoPerfil {
    _codigo;
    _perfil;
    _objeto;
    _criar;
    _editar;
    _excluir;
    _ver_todos;
    _editar_todos;

    constructor(codigo, perfil, objeto, criar, editar, excluir, ver_todos, editar_todos) {
        this._codigo = codigo;
        this._perfil = perfil;
        this._objeto = objeto;
        this._criar = criar;
        this._editar = editar;
        this._excluir = excluir;
        this._ver_todos = ver_todos;
        this.editar_todos = editar_todos;
    }

    get codigo(){
        return this._codigo;
    }
    get perfil(){
        return this._perfil;
    }
    get objeto(){
        return this._objeto;
    }
    get criar(){
        return this._criar;
    }
    get editar(){
        return this._editar;
    }
    get excluir(){
        return this._excluir;
    }
    get ver_todos(){
        return this._ver_todos;
    }
    get editar_todos(){
        return this._editar_todos;
    }

    set codigo(codigo){
        this._codigo = codigo;
    }
    set perfil(perfil){
        this._perfil = perfil;
    }
    set objeto(objeto){
        this._objeto = objeto;
    }
    set criar(criar){
        this._criar = criar;
    }
    set editar(editar){
        this._editar = editar;
    }
    set excluir(excluir){
        this._excluir = excluir;
    }
    set ver_todos(ver_todos){
        this._ver_todos = ver_todos;
    }
    set editar_todos(editar_todos){
        this._editar_todos = editar_todos;
    }
}

export default PermissaoPerfil;