import mysql2 from "mysql2";

const connection = mysql2.createConnection({
  host: '127.0.0.1',       // Nome do host do banco de dados
  port: '3306',            // Porta do banco de dados (geralmente 3306)
  database: 'ok', // Nome do banco de dados
  user: 'root',     // Nome de usuário do banco de dados
  password: '12345'    // Senha do banco de dados
});

try {
  connection.connect();
  console.log("connection - database on");
} catch (error) {
  console.log(error.message);
}

export default connection;
