import { Request, Response } from 'express';
import { createQueryBuilder, getRepository } from 'typeorm';
import Person from '../models/Person';
import path from "path"; 
import fs from "fs";

class PersonController {

    async getAllPersons(req: Request, res: Response) {
        try {
            const repository = getRepository(Person);
            const persons = await repository.query(
                `select 
                    p.id, p.name, p.phone, p.email, p.photo_url , pro."profession" 
                from 
                    public.person p 
                inner join 
                    public.profession pro 
                on
                    p.profession_id = pro.id`
            );

            return res.json(persons);
        } catch(error) {
            return res.json({
                error,
            });
        }
    }

    async getByIdPerson(req: Request, res: Response) {
        try {
            const repository = getRepository(Person);
            const { id } = req.params;

            const person = await repository.query(
                `select 
                    p.id, p.name, p.phone, p.email, p.photo_url , pro."profession" 
                from 
                    public.person p 
                inner join 
                    public.profession pro 
                on
                    p.profession_id = pro.id
                where
                    p.id = '${id}'`
            );

            return res.json(person);
        } catch(error) {
            return res.json({
                error,
            });
        }
    }

    async createPerson(req: Request, res: Response) {
        try {
            const repository = getRepository(Person);
            const { name, phone, email, profession_id } = req.body;

            console.log(req.file);

            const photoUrl = `${process.env.URL}/files/${req.file?.filename}`;
            console.log(photoUrl)

            const person = await repository.create({ name, phone, email, professionId: profession_id, photoUrl });
            await repository.save(person);

            return res.json(person);
        } catch(error) {
            return res.json({
                error,
            });
        }
    }

    async updatePerson(req: Request, res: Response) {
        try {
            const repository = getRepository(Person);
            const { name, phone, email, profession_id } = req.body;
            const { id } = req.params;

            const person = await repository.findOne({
                where: { id }
            });

            person!.name = name;
            person!.phone = phone;
            person!.email = email;
            person!.professionId = profession_id;

            await repository.save(person!);

            return res.json(person);
        } catch(error) {
            return res.json({
                error,
            });
        }
    }

    async deletePerson(req: Request, res: Response) {
        try {
            const repository = getRepository(Person);
            const { id } = req.params;

            const person = await repository.findOne({
                where: { id }
            });

            await repository.delete({ id: person?.id });

            return res.json({ message: 'Person successfully deleted!' });
        } catch(error) {
            return res.json({
                error,
            });
        }
    }

}

export default new PersonController();