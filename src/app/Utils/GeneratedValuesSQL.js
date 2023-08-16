class GeneratedValuesSQL {
    generatedValues(json, ultimoId, generated = null){
        const columns = Object.keys(json);
        const values = Object.values(json);
        const nonEmptyValues = values.filter(value => value !== null && value !== '');

        const atIndex = ultimoId[0]['MAX(id)'].indexOf('@');
        const cleanId = ultimoId[0]['MAX(id)'].substring(3, atIndex);


        let concatenatedString;
        concatenatedString = nonEmptyValues.map((value, index) => {
            const formattedIndex = index + 1 < 10 ? `0${index + 1}` : index + 1;
            const codeNumber = parseInt(cleanId) + index + 1; // Calcula o próximo número
            const code = `003${codeNumber}@information`;
            return `('${code}', '${value}', '${columns[index]}', '002${formattedIndex}@field')`;
        }).join(',\n'); // Junta as strings com quebras de linha;

      return concatenatedString;
    }
}
export default new GeneratedValuesSQL();