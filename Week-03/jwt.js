const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser'); // Middleware to parse JSON bodies

const jwtPassword = '123456';

const app = express();
app.use(bodyParser.json()); // Use body-parser middleware

const ALL_USERS = [
    {
        username: 'vaibhav',
        password: '123456789',
        name: 'Vaibhav Mahajan'
    },
    {
        username: "atharv",
        password: "123456987",
        name: 'Atharv Mahajan'
    },
    {
        username: 'chetan',
        password: '321654987',
        name: 'Chetan Mahajan'
    }
];

function userExist(username, password) {
    return ALL_USERS.some(user => user.username === username && user.password==password);
}

app.post('/signin', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    if (!username || !password) {
        return res.status(400).json({
            msg: "Username and password are required"
        });
    }

    if (!userExist(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in memory"
        });
    }

    const token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get('/users', (req, res) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(400).json({
            msg: "Token is required"
        });
    }

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;



        return res.json({
            users: ALL_USERS.find((value)=>{
                if(value.username==username){
                    return false;
                } else {
                    return true;
                }
            })
        });
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
