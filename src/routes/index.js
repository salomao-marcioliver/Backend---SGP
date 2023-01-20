import express from "express";
import { addProject, deleteProject, getProject, updateProjet } from "../controllers/projectCoordinatorController.js";
import { getStudent } from "../controllers/studentController.js";
const router = express.Router()

router.get('/projetos', getProject);
router.post('/projetos', addProject);
router.delete("/projetos/:id", deleteProject);
router.put("/projetos/:id", updateProjet)


export default router;