import postgres from "pg";

const postgresConnection = new postgres.Pool({
    user: 'vizion',
    host: 'localhost',
    database: 'postgresDB',
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