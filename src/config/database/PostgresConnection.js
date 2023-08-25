import postgres from "pg";

const postgresConnection = new postgres.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Vizion',
    password: '12345',
    port: 5432
});

try {
    postgresConnection.connect();
    console.log("postgresConnection - database on");
} catch (error) {
    console.log(error.message);
}

export default postgresConnection;