import connection from "../../config/database/connection.js";

class Repository {
    queryObjeto(sql, params = "") {
        return new Promise((resolve, reject) => {
            connection.query(sql, params, (error, result) => {
                if (error) {
                    const erro = {
                        erro: "SQL - reject",
                        message: error.message,
                    };
                    return reject(erro);
                } else {
                    const row = JSON.parse(JSON.stringify(result));
                    return resolve(row);
                }
            });
        });
    }

    findAll(table) {
        const sql = `SELECT * FROM ${table};`;
        return this.queryObjeto(sql);
    }

    create(table, columns, values) {
        const sql = `INSERT INTO ${table} (${columns.join(",")}) VALUES (${values.join(',')});`;
        return this.queryObjeto(sql);
    }

    findById(table, id) {
        const sql = `SELECT * FROM ${table} WHERE id = ${id};`;
        return this.queryObjeto(sql);
    }

    update(table, id, columnId, columns, values){
        const columnValuePairs = columns.map((column, index) => `${column}=${values[index]}`);    
        const sql = `UPDATE ${table} SET ${columnValuePairs} WHERE ${columnId} = ${id};`;
        return this.queryObjeto(sql);
    }

    delete(table, id, columnId){
        const sql = `DELETE FROM ${table} WHERE ${columnId} = ${id};`;
        return this.queryObjeto(sql);
    }
}
export default new Repository();