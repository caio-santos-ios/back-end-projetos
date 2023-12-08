import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

interface Itecnology {
    name: string;
}

@Entity('projects')
export class Project {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string;

    @Column()
    link: string;

    @Column()
    photo: string;

    @Column()
    description: string;

    @Column()
    repository: string;

    @Column({type: "json"})
    tecnologies: Itecnology;
}