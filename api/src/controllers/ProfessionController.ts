import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Profession from '../models/Profession';


class ProfessionController {

    async getAllProfessions(req: Request, res: Response) {
        try {
            const repository = getRepository(Profession);
            const persons = await repository.find();
            return res.json(persons);
        } catch(error) {
            return res.json({
                error,
            });
        }
    }

    async getByIdProfession(req: Request, res: Response) {
        try {
            const repository = getRepository(Profession);
            const { id } = req.params;

            const person = await repository.findOne({
                where: { id }
            });

            return res.json(person);
        } catch(error) {
            return res.json({
                error,
            });
        }
    }

    async createProfession(req: Request, res: Response) {
        try {
            const repository = getRepository(Profession);
            const { name } = req.body;

            const profession = await repository.create({ name });
            await repository.save(profession);

            return res.json(profession);
        } catch(error) {
            return res.json({
                error,
            });
        }
    }

    async updateProfession(req: Request, res: Response) {
        try {
            const repository = getRepository(Profession);
            const { name } = req.body;
            const { id } = req.params;

            const profession = await repository.findOne({
                where: { id }
            });

            profession!.name = name;

            await repository.save(profession!);

            return res.json({ message: 'Profession successfully deleted!' });
        } catch(error) {
            return res.json({
                error,
            });
        }
    }

    async deleteProfession(req: Request, res: Response) {
        try {
            const repository = getRepository(Profession);
            const { id } = req.params;

            const profession = await repository.findOne({
                where: { id }
            });

            await repository.delete({ id: profession?.id });

            return res.json(profession);
        } catch(error) {
            return res.json({
                error,
            });
        }
    }

}

export default new ProfessionController();