import { Router } from "express";
import PersonController from "../controllers/PersonController";

const router = Router();

router.get('/persons', PersonController.getAllPersons);
router.post('/persons', PersonController.createPerson);

export default router;