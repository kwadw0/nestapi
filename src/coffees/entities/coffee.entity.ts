import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()//it allows typeorm to create a sql table
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column('json', {nullable: true})
    flavors: string[];
  }