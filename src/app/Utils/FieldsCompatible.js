class FieldsCompatible {
    areFieldsCompatible(model, json, fields = []) {
        let camposIgnorados = ['_id', 'id', 'createdAt', 'updatedAt', 'camposAdicionais', 'endereco'];
        if (fields.length !== 0){
            camposIgnorados = camposIgnorados.concat(fields);
        }

        const modelFields = Object.keys(model.schema.paths).filter(field => !field.includes('.')).filter((campo) => !camposIgnorados.includes(campo));
        const jsonFields = Object.keys(json).filter((campo) => !camposIgnorados.includes(campo));

        if (modelFields.length !== jsonFields.length) {
            return false;
        }

        for (const key of modelFields) {
            if (!modelFields.includes(key) && !jsonFields.includes(key)) {
                return false;
            }
        }

        return true;
    }

}
export default new FieldsCompatible();