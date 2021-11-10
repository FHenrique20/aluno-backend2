import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Alunos{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;

    @Column()
    age: number;
 
    @Column()
    ra: string;
 
    @Column()
    birth: Date;
    
    @Column()
    adress: string;

    @Column({
        default: false
    })
    registration: boolean; 
 
    @CreateDateColumn()
    create_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}