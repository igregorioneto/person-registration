import { Router } from "express";
import PersonController from "../controllers/PersonController";
import ProfessionController from "../controllers/ProfessionController";

const router = Router();

//persons
router.get('/persons', PersonController.getAllPersons);
router.get('/persons/:id', PersonController.getByIdPerson);
router.post('/persons', PersonController.createPerson);
router.put('/persons/:id', PersonController.updatePerson);
router.delete('/persons/:id', PersonController.deletePerson);

//professions
router.get('/professions', ProfessionController.getAllProfessions);
router.get('/professions/:id', ProfessionController.getByIdProfession);
router.post('/professions', ProfessionController.createProfession);
router.put('/professions/:id', ProfessionController.updateProfession);
router.delete('/professions/:id', ProfessionController.deleteProfession);

export default router;