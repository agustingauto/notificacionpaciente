const { Client } = import('pg');

export const ObtenerDatosUsuarios = async () => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'SistemaNotif',
        password: 'Laprida1125',
        port: 5432,
    })
    await client.connect()
    
    const res = await client.query("SELECT * FROM users")

    const username = res.rows[0].username;
    const password = res.rows[0].password;
    

    await client.end()

    console.log(username)
    return username;

}

