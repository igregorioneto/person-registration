import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profession')
class Profession {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

}

export default Profession;