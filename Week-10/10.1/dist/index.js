"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgres://rdjgjlhr:jDlOrD7Ay0JD_c6a713a_SdFytBXcL8C@flora.db.elephantsql.com/rdjgjlhr"
});
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect().then(() => {
            console.log('connected successfully');
        });
        const query = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(55) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `;
        const result = yield client.query(query);
        console.log(result);
    });
}
function insertIntoTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect().then(() => {
            console.log('connected');
        });
        try {
            const query = `
            INSERT INTO users (username, email,password) VALUES ('username2','adfsfsfsdf@gmail.com','123456789') 
        `;
            const res = yield client.query(query);
            console.log('Insertion successful', res);
        }
        catch (error) {
            console.log('error during insertion');
        }
        finally {
            yield client.end();
        }
    });
}
insertIntoTable();
