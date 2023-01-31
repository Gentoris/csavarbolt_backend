import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';



@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  screwId: number;

  @Column()
  db: number;
}