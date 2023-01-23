import express from "express";
import { addProject, deleteProject, getProject, updateProjet } from "../controllers/projectCoordinatorController.js";
import { auth, login } from "../controllers/authControler.js";
import { addStudent, getStudent, removeStudent, updateStudent } from "../controllers/studentController.js";
const router = express.Router()

router.post('/login', login)

router.get('/projetos', auth, getProject);
router.post('/projetos', addProject);
router.delete('/projetos/:id', deleteProject);
router.put('/projetos/:id', updateProjet)

router.get('/bolsistas', auth, getStudent)
router.post('/bolsistas', addStudent)
router.delete('/bolsistas/:id', removeStudent)
router.put('/bolsistas/:id', updateStudent)



export default router;