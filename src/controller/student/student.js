import { Router } from 'express';
import db from '../../services/connectionExamDB'
import _ from 'lodash';
const router = Router();
var moment = require('moment'); 

router.post('/portfolio-add', async (req, res) => {
  if(!req.body.studentId){
    return res
      .status(200)
      .send({ type: "error", msg: 'studentId not get' });
  }
  if(!req.body.date){
    return res
      .status(200)
      .send({ type: "error", msg: 'Поле "Дата" не заполнено' });
  }
  if(!req.body.name){
    return res
      .status(200)
      .send({ type: "error", msg: 'Поле "Название" не заполнено' });
  }
  if(!req.body.stack){
    return res
      .status(200)
      .send({ type: "error", msg: 'Поле "Технологий" не заполнено' });
  }
  if(!req.body.description){
    return res
      .status(200)
      .send({ type: "error", msg: 'Поле "Описания" не заполнено' });
  }

  try {
    //student
    await db.query('INSERT INTO `portfolio` SET '+
      'name="'+req.body.name+'",'+
      'studentId='+parseInt(req.body.studentId,10)+','+
      'date="'+req.body.date+'",'+
      'name="'+req.body.name+'",'+
      'stack="'+req.body.stack+'",'+
      'raiting="'+req.body.raiting+'",'+
      'fail="'+req.body.fail+'",'+
      'description="'+req.body.description+'"');
    return res.status(200).send({ type: "ok" });
  } catch (err) {
    return res
      .status(401)
      .send({ type: "error", msg: err.message});
  }
});


export default router;