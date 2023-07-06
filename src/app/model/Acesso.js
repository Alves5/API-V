class Acesso {
    _id;
    _usuario;
    _registro;
    _objeto;
    _ver;
    _editar;

    constructor(id, usuario, registro, objeto, ver, editar) {
        this._id = id;
        this._usuario = usuario;
        this._registro = registro;
        this._objeto = objeto;
        this._ver = ver;
        this._editar = editar;
    }

    get id(){
        return this._id;
    }
    get usuario(){
        return this._usuario;
    }
    get registro(){
        return this._registro;
    }
    get objeto(){
        return this._objeto;
    }
    get ver(){
        return this._ver;
    }
    get editar(){
        return this._editar;
    }

    set id(id){
        this._id = id;
    }
    set usuario(usuario){
        this._usuario = usuario;
    }
    set registro(registro){
        this._registro = registro;
    }
    set objeto(objeto){
        this._objeto = objeto;
    }
    set ver(ver){
        this._ver = ver;
    }
    set editar(editar){
        this._editar = editar;
    }
}

export default Acesso;