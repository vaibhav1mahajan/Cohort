import { Client } from "pg";

const client = new Client({
    connectionString:"postgres://rdjgjlhr:jDlOrD7Ay0JD_c6a713a_SdFytBXcL8C@flora.db.elephantsql.com/rdjgjlhr"
})


async function createTable() {
    await client.connect().then(()=>{
        console.log('connected successfully');
    })

    const query = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(55) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `
    const result =  await client.query(query);
    console.log(result);
}



async function insertIntoTable(){
        await client.connect().then(()=>{
            console.log('connected');
        })
        try {
            const query = `
            INSERT INTO users (username, email,password) VALUES ('username2','adfsfsfsdf@gmail.com','123456789') 
        `
        const res = await client.query(query);
        console.log('Insertion successful',res);
        } catch (error) {
            console.log('error during insertion');
        } finally{
            await client.end()
        }
        
}

insertIntoTable();