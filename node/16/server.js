//dotenv é referente ao arquivo que contém senha e usúarios do banco de dados (ou coisas que não podem ser públicas)
require('dotenv').config();

//Express é o responsavél por estruturar a API
const express = require('express');
const app = express();

//Mongoose é quem vai modelar o banco de dados, e verificxar se os dados estão corretos
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

//Session vai salvar a seção do usúario com um ID de um cookie
const session = require('express-session');
//MongoStore vai salvar as seções na base de dados
const MongoStore = require('connect-mongo');
//Connect-flash são mensagens auto destrutivas
const flash = require('connect-flash');
const routes = require('./routes');
const helmet = require('helmet');
const path = require('path');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
