class FieldInformation {
    _id;
    _nameField;
    _apiNameField;
    _fieldID;

    constructor(id, nameField, apiNameField, fieldID) {
        this._id = id;
        this._nameField = nameField;
        this._apiNameField = apiNameField;
        this._fieldID = fieldID;
    }

    get id(){
        return this._id;
    }
    get nameField(){
        this._nameField;
    }
    get apiNameField(){
        this._apiNameField;
    }
    get fieldID(){
        this._fieldID;
    }

    set id(id){
        return this._id = id;
    }
    set nameField(nameField){
        return this._nameField = nameField;
    }
    set apiNameField(apiNameField){
        return this._apiNameField = apiNameField;
    }
    set fieldID(fieldID){
        return this._fieldID = fieldID;
    }
}
export default FieldInformation;