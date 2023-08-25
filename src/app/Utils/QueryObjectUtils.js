import postgresConnection from "../../config/database/PostgresConnection.js";

class QueryObjectUtils{
    queryObjeto(sql, params = "") {
        return new Promise((resolve, reject) => {
            postgresConnection.query(sql, params, (error, result) => {
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
}
export default new QueryObjectUtils();