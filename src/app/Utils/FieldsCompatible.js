class FieldsCompatible {
    areFieldsCompatible(model, json) {
        const modelFields = Object.keys(model.schema.paths);
        const jsonFields = this.getAllKeys(json);

        const camposIgnorados = ['_id', 'id', 'createdAt', 'updatedAt', 'camposAdicionais', 'endereco'];
        const camposFiltradosModels = modelFields.filter((campo) => !camposIgnorados.includes(campo));
        const camposFiltradosJson = jsonFields.filter((campo) => !camposIgnorados.includes(campo));

        if (camposFiltradosModels.length !== camposFiltradosJson.length) {
            return false;
        }

        for (const key of camposFiltradosModels) {
            if (!camposFiltradosModels.includes(key) && !camposFiltradosJson.includes(key)) {
                return false;
            }
        }

        return true;
    }

    getAllKeys(obj) {
        let keys = [];

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);

                if (typeof obj[key] === 'object') {
                    const nestedKeys = this.getAllKeys(obj[key]);
                    keys = keys.concat(nestedKeys.map(nestedKey => `${key}.${nestedKey}`));
                }
            }
        }

        return keys;
    }
}
export default new FieldsCompatible();