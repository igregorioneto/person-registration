import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    //@Column({ name: 'photo_url' })
    //photoUrl: string;

    //@Column({ name: 'profession_id' })
    //professionId: string;
}

export default Person;