import express from 'express';
import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';
import multer from 'multer';

const app = express();

//Настройка подключения к бд
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 3000,
    user: 'root',
    database: 'siteTravel',
});

//Создание парсера
const urlcodedParsers = express.urlencoded({extended: false});

//Указание пути к файлом hbs
app.use(express.static(path.join(fs.realpathSync('.') + '/public')));
app.set('view engine', 'hbs');

//Настройка работы с файлами пользователя
const storageFile = multer.diskStorage({
    destination: (req, file, cd)=>{
        cd(null, 'piblic/img/profile');
    },
    filename: (req, file, cd)=>{
        cd(null, file.originalname);
    },
});

const upload = multer({storage: storageFile});

app.get('/', (_, res)=>{
res.render('index.hbs',{
    title: 'Авторизация',
    loginError: '',
})
});

app.post('/login', urlcodedParsers, (req, res)=>{
    if(!req.body) return res.statusCode(400);

    pool.query('SELECT * FROM users', (err, data)=>{
        if(err) return console.log(err);

        for (let i = 0; i < data.length; i++) {
            if(data[i].login == req.body.login && data[i].password == req.body.password){
                return res.redirect('/home');
            }            
        }

        return res.render('index.hbs', {
            title: 'Пользователь не найден!',
            loginError: 'login-error'
        });
    })
});

app.get('/register', (_, res)=>{
    res.render('register.hbs')
});

app.listen(3000, ()=>{
    console.log('Server ative. URL: http://localhost:3000/');
});