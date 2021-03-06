import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Person from "./Person";

@Entity('profession')
class Profession {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    profession: string;

    @OneToMany(() => Person, person => person.professionConnection)
    personConnection: Person[];

}

export default Profession;