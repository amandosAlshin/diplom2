import path from 'path';
import express from 'express';
import { users,questions,answers,student} from './controller/index.js';

import jwt from 'express-jwt';
import bodyParser from 'body-parser';

const app = express();
const { port,secret } = require('./config/vars');

var cors = require('cors')

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'exam/build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public')));

app.get('/admin', (req, res) => res.sendFile(path.join(__dirname+'/client/build/index.html')));
app.get('/exam', (req, res) => res.sendFile(path.join(__dirname+'/exam/build/index.html')));

app.post('/cabinet/*', jwt({ secret: secret}),
  (err,req, res,next) => {
    if(err){
      if(err.name = 'UnauthorizedError'){
          return res.sendStatus(401);
      }
    }
  }
)


var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use('/api/users',cors(corsOptions), users);

app.use('/cabinet/questions',cors(corsOptions), questions);
app.use('/cabinet/answers',cors(corsOptions), answers);
app.use('/exam/student',cors(corsOptions), student);



app.listen(port, () => console.log(`Server serik diplom listinging on localhost: ${port}`));
