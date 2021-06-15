import { Router } from 'express';
import jwt from 'jsonwebtoken';
const { secret } = require('../../config/vars');  
const router = Router();


router.post('/signin', async (req, res) => {
  if(!req.body.email){
    return res
      .status(200)
      .send({ type: "error", user_id: "", msg: 'не заполнен Email',token: "" });
  }
  if(!req.body.password){
    return res
      .status(200)
      .send({ type: "error", user_id: "", msg: 'не заполнен Пароль',token: "" });
  }
  try {
    const data = await db.query('SELECT id,email,name,surname FROM students WHERE email="'+req.body.email+'"');
    if(data.length>0){
      if (req.body.password !=data[0].password) {
        return res.status(200).send({ type: 'error',token: "",user_id: 0, msg: 'неправильный пароль' });
      }else{
        const token = jwt.sign(
          {
            student_id: parseInt(data[0].id),
            email: data[0].email,
            name: data[0].name,
            surname: data[0].surname
          },
          secret,
          { expiresIn: '1d' },
        );
        return res.json({type: 'ok', token,  student_id: parseInt(data[0].id)});
      }
    }else{
      return res.status(200).send({ type: 'error',token: "", user_id: 0, msg: 'пользователь не найден'});
    }
  } catch (err) {
    return res
      .status(200)
      .send({ type: "error",token: "", user_id: 0, msg: err.message });
  }
});

router.post('/signup', async (req, res) => {
  if(!req.body.email){
    return res
      .status(200)
      .send({ type: "error", user_id: "", msg: 'не заполнен Email',token: "" });
  }
  if(!req.body.name){
    return res
      .status(200)
      .send({ type: "error", user_id: "", msg: 'не заполнен Имя',token: "" });
  }
  if(!req.body.surname){
    return res
      .status(200)
      .send({ type: "error", user_id: "", msg: 'не заполнен Фамилия',token: "" });
  }
  if(!req.body.course){
    return res
      .status(200)
      .send({ type: "error", user_id: "", msg: 'не заполнен Курс',token: "" });
  }
  if(!req.body.univer){
    return res
      .status(200)
      .send({ type: "error", user_id: "", msg: 'не заполнен Универ/Коледж',token: "" });
  }
  if(!req.body.knowledge){
    return res
      .status(200)
      .send({ type: "error", user_id: "", msg: 'не заполнен факультет',token: "" });
  }
  if(!req.body.password){
    return res
      .status(200)
      .send({ type: "error", user_id: "", msg: 'не заполнен Пароль',token: "" });
  }

  try {
     //student
    let instStudent = await db.query('INSERT INTO `students` SET '+
      'name="'+req.body.name+'",'+
      'surname="'+req.body.surname+'",'+
      'course="'+req.body.course+'",'+
      'univer="'+req.body.univer+'",'+
      'knowledge="'+req.body.knowledge+'",'+
      'password="'+req.body.password+'",'+
      'email="'+req.body.email+'"');
    
    const token = jwt.sign(
      {
        student_id: instStudent.insertId,
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname
      },
      secret,
      { expiresIn: '1d' },
    );
    return res.status(200).send({ type: "ok", token, student_id: instUser.insertId});
  } catch (err) {
    return res
      .status(401)
      .send({ type: "error", msg: err.message});
  }
});

router.post('/info', async (req, res) => {
  return res.status(200).send({ type: 'ok', name: "admin", role: "admin"});
});
router.post('/logout', async (req, res) => {
  return res.status(200).send({ type: 'ok'});
});



export default router;