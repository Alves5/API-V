import mysql2 from "mysql2";

//configurações de coneção do sql
const connectionSql = mysql2.createConnection({
  host: 'localhost',       // Nome do host do banco de dados
  port: '3306',            // Porta do banco de dados (geralmente 3306)
  database: 'ok', // Nome do banco de dados
  user: 'vizion',     // Nome de usuário do banco de dados
  password: '12345'    // Senha do banco de dados
});

//conectando ao banco de dados sql
try {
  connectionSql.connect();
  console.log("connection - database on");
} catch (error) {
  console.log("error.message");
}

export default connectionSql;
