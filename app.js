import express from 'express';
import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';
import multer from 'multer';

const app = express();

let user; //Инфомрация о пользователе
let fileNameImgPost; //Название файла изображения для поста

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
        cd(null, 'public/img/profile');
    },
    filename: (req, file, cd)=>{
        cd(null, file.originalname);
        fileNameImgPost = file.originalname;
    },
});

const storgeImagePost = multer.diskStorage({
    destination: (req, file, cd)=>{
        cd(null, `'public/img/post/${user.id}'`);
    },
    filename: (req, file, cd)=>{
        cd(null, file.originalname);
    },
})

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
                user = data[i];
                return res.redirect('/home');
            }
            else if(data[i].login == req.body.login && data[i].password != req.body.password){
                return res.render('index.hbs', {
                    title: 'Пароль введён неправильно!',
                    loginError: 'login-error'
                });
            }            
        }

        return res.render('index.hbs', {
            title: 'Пользователь не найден!',
            loginError: 'login-error'
        });
    })
});

app.get('/register', (_, res)=>{
    res.render('register.hbs', {
        title: 'Регистрация',
        loginError: '',
    })
});

app.post('/registr', urlcodedParsers, (req, res)=>{
    if(!req.body) return res.sendStatus(400);

    pool.query('SELECT * FROM users', (err, data)=>{
        if(err) return console.log(err);

        for (let i = 0; i < data.length; i++) {
            if(data[i].login == req.body.login){
                return res.render('register.hbs', {
                    title: 'Логин занят!',
                    loginError: 'login-error',
                });
            }            
        }

        pool.query('INSERT INTO users (login, password, firstName, lastName, pathImg) VALUES(?,?,?,?,?)', [req.body.login, req.body.password, req.body.firstName, req.body.lastName, '/img/profile/profile-icon-default.webp'], (err)=>{
            if(err) return console.log(err);
        });
    
        res.redirect('/');
    })
});

app.get('/home', (_, res)=>{
    pool.query('SELECT * FROM post', (err, data)=>{
        if(err) return console.log(err);
        let posts = [];

        pool.query('SELECT * FROM users', (err, dataUser)=>{
            if(err) return console.log(err);

            for (let i = 0; i < data.length; i++) {

                for (let j = 0; j < dataUser.length; j++) {
     
                    if(data[i].idUser == dataUser[j].id){
     
                        posts.push({
                            title: data[i].title,
                            userFirstName: dataUser[j].firstName,
                            userLastName: dataUser[j].lastName,
                            userImg: dataUser[j].pathImg,
                            postId: data[i].id,
                        })
                    } 
                }
            }
        
            res.render('home.hbs', {
                profileImg: user.pathImg,
                firstName: user.firstName,
                lastName: user.lastName,
                posts: posts,
            });
        });
    });
});

app.post('/getpost/:id', urlcodedParsers, (req, res)=>{
 
    pool.query('SELECT * FROM post', (err, data)=>{
        if(err) return console.log(err);

        pool.query('SELECT * FROM users', (err, dataUser)=>{
            if(err) return console.log(err);

            for (let i = 0; i < dataUser.length; i++) {

                for (let j = 0; j < dataUser.length; j++) {
                    if(data[i].id == req.params.id){
                        let pathImg = data[i].pathImg.replace(/\]/gi, '').replace(/\"/gi, '').replace(/\[/gi, '').split(','), 
                            grade = data[i].grade.replace(/\]/gi, '').replace(/\"/gi, '').replace(/\[/gi, '').split(',');

                        return res.render('post.hbs', {
                            namePost: data[i].title,
                            profileImg: user.pathImg,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            authorImg: dataUser[i].pathImg,
                            authorFirstName: dataUser[j].firstName,
                            authorLastName: dataUser[j].lastName,
                            postCost: data[i].cost,
                            postText: data[i].text,
                            galary: pathImg,
                            postGradeOne: grade[0],
                            postGradeTwo: grade[1],
                            postGradeTree: grade[2],
                            postGradeFour: grade[3],
                        });
                    } 
                }
            }
        });
    });
});

app.get('/writePost', (_, res)=>{
    res.render('writePost.hbs', {
        profileImg: user.pathImg,
        firstName: user.firstName,
        lastName: user.lastName,
    });
});

app.post('/writePost', upload.any(''), (req, res)=>{
    if(!req.body) return res.sendStatus(400);

    let grade = [`${req.body.postGrade1}`,`${req.body.postGrade2}`,`${req.body.postGrade3}`,`${req.body.postGrade4}`];

    pool.query('INSERT INTO post (idUser, title, text, cost, grade, pathImg) VALUES (?,?,?,?,?,?)', [user.id, req.body.postTitle, req.body.postText, req.body.postPrice, `${grade}`, `/img/post/${user.id}/${fileNameImgPost}`], (err)=>{
        if(err) return console.log(err);


        res.redirect('/home');
    }); 
})

app.get('/profile', (_, res)=>{

    pool.query('SELECT * FROM post', (err, data)=>{
        if(err) return console.log(err);

        let listPosts = [];

        for (let i = 0; i < data.length; i++) {
            if(user.id == data[i].idUser){
                listPosts.push({title: data[i].title, id: data[i].id});
            }            
        }

        res.render('profile.hbs', {
            profileImg: user.pathImg,
            firstName: user.firstName,
            lastName: user.lastName,
            posts: listPosts,
        });
    });
});

app.post('/removePost/:id', urlcodedParsers, (req, res)=>{
    pool.query('DELETE FROM post WHERE id=?', [req.params.id], (err)=>{
        if(err) return console.log(err);

        res.redirect('/profile');
    })
});

app.listen(3000, ()=>{
    console.log('Server ative. URL: http://localhost:3000/');
});