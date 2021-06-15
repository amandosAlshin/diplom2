import { Router } from 'express';
import db from '../../services/connectionExamDB'
const router = Router();


router.post('/portfolio-list', async (req, res) => {
  try {
    const students = await db.query('SELECT id,name,`surname`,course,univer,knowledge,email FROM students');
    return res.status(200).send({ type: "ok", students: students });
  } catch (err) {
    return res
      .status(401)
      .send({ type: "error", msg: err.message});
  }
  
});
router.post('/students-info', async (req, res) => {
  if(!req.body.studentId){
    return res
      .status(200)
      .send({ type: "error", msg: 'Выберите вопрос' });
  }
  try {
    const students = await db.query('SELECT s.id,s.surname,s.name,CONCAT(s.surname," ",s.name) AS fullName,s.course,s.univer,s.knowledge,s.email'+
    'LEFT JOIN '+
    'FROM students  s WHERE s.id = "'+req.body.studentId+'"');
    return res.status(200).send({ type: "ok", students: students });
  } catch (err) {
    return res
      .status(401)
      .send({ type: "error", msg: err.message});
  }
  
});

export default router;