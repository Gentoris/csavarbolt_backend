import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Screw {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  length: number;

  @Column()
  stock: number;

  @Column()
  price: number;
}