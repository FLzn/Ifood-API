import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Loja')
export class Loja {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'nome',
        nullable: false,
        type: 'string'
    })
    nome: string;

    @Column({
        name: 'info',
        nullable: false,
        type: 'string'
    })
    info: string;

    @Column({
        name: 'destaque',
        nullable: false,
        type: 'boolean'
    })
    destaque: boolean;

    @Column({
        name: 'image',
        nullable: false,
        type: 'string'
    })
    image: string;

    @Column({
        name: 'nota',
        nullable: false,
        type: 'number'
    })
    nota: number;

    @Column({
        name: 'createdAt',
        nullable: false,
        type: 'date'
    })
    createdAt: Date;

    @Column({
        name: 'updatedAt',
        nullable: false,
        type: 'date'
    })
    updatedAt: Date;

    @Column({
        name: 'deletedAt',
        nullable: true,
        type: 'date'
    })
    deletedAt: Date;

}
