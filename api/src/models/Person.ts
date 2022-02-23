import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Profession from "./Profession";

@Entity('person')
class Person {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column({ name: 'photo_url' })
    photoUrl: string;

    @Column({ name: 'profession_id' })
    professionId: string;

    @ManyToOne(() => Profession, profession => profession.personConnection, {
        primary: true,
    })
    @JoinColumn({ name: 'profession_id' })
    professionConnection: Profession;
}

export default Person;