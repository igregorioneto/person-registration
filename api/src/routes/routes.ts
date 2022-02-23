import { Router } from "express";
import PersonController from "../controllers/PersonController";
import ProfessionController from "../controllers/ProfessionController";
import { uploadAvatar } from "../config/upload";
import multer from "multer";
import cors from "cors";
const router = Router();

const corsOptions = {
    origin: '*',
    credentrials: true,
    optionSuccessStatus: 200,
}

//persons
router.get('/persons', cors(corsOptions) ,PersonController.getAllPersons);
router.get('/persons/:id', cors(corsOptions), PersonController.getByIdPerson);
router.post('/persons', cors(corsOptions), multer(uploadAvatar.getConfig).single("file"), PersonController.createPerson);
router.put('/persons/:id', cors(corsOptions), PersonController.updatePerson);
router.delete('/persons/:id', cors(corsOptions), PersonController.deletePerson);

//professions
router.get('/professions', ProfessionController.getAllProfessions);
router.get('/professions/:id', ProfessionController.getByIdProfession);
router.post('/professions', ProfessionController.createProfession);
router.put('/professions/:id', ProfessionController.updateProfession);
router.delete('/professions/:id', ProfessionController.deleteProfession);

export default router;