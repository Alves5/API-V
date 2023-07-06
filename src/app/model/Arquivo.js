class Arquivo{
    _id;
    _name;
    _content;
    _created_at;
    _updated_at;
    _mime_type;

    constructor(id, name, content, created_at, updated_at, mime_type){
        this._id = id;
        this._name = name;
        this._content = content;
        this._created_at = created_at;
        this._updated_at = updated_at;
        this._mime_type = mime_type;
    }

    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get content(){
        return this._content;
    }
    get created_at(){
        return this._created_at;
    }
    get updated_at(){
        return this._updated_at;
    }
    get mime_type(){
        return this._mime_type;
    }

    set id(id){
        this._id = id;
    }
    set name(name){
        this._name = name;
    }
    set content(content){
        this._content = content;
    }
    set created_at(created_at){
        this._created_at = created_at;
    }
    set updated_at(updated_at){
        this._updated_at = updated_at;
    }
    set mime_type(mime_type){
        this._mime_type = mime_type;
    }
}
export default Arquivo;