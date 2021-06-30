import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Loja')
export class LojaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'nome',
        nullable: false,
        type: 'string'
    })
    nome: string;

    @Column({

    })
    info: string;

}
