import Repository from "../repositories/Repository.js";

class Controller {
    async findAll(request, response) {
        const objeto = request.params.objeto;
        try {
            const result = await Repository.findAll(objeto);
            response.json(result);
        } catch (error) {
            response.json(error);
        }
    }

    async store(request, response) {
        const data = request.body; // JSON contendo os dados da tabela
        const { objeto, identifier, columnId, ...columnsAndValues } = data; // Extrai o nome da tabela, o id e as colunas com seus valores
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' '); // Formata a data para YYYY/MM/dd 00:00:00
        columnsAndValues.created_at = currentDate;
        columnsAndValues.updated_at = currentDate;
        const columns = Object.keys(columnsAndValues).map(column => {
            if (column.includes(' ')) {
                return `\`${column}\``;
            }
            return column;
        });
        const values = Object.values(columnsAndValues).map(value => {
            if (typeof value === 'string') {
                return `'${value}'`;
            }
            return value;
        });

        try {
            if (identifier == null || identifier == '') {
                await Repository.create(objeto, columns, values);
                response.json({ message: "Success - Objeto inserido" });
            }else{
                await Repository.update(objeto, identifier, columnId, columns, values);
                response.json({messase: "Success - Objeto atualizado"});
            }
        } catch (error) {
            response.json(error);
        }
    }

    async findById(request, response){
        const objeto = request.params.objeto;
        const identifier = request.params.id;
        try {
            const result = await Repository.findById(objeto, identifier)
            response.json(result);
        } catch (error) {
            response.json(error);
        }
    }

    async delete(request, response){
        const objeto = request.params.objeto;
        const identifier = request.params.id;
        try {
            await Repository.delete(objeto, identifier)
            response.json({ message: "Success - objeto deletado" });
        } catch (error) {
            response.json(error);
        }
    }
}
export default new Controller();