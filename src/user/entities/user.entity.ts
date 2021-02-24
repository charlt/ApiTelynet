import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  poblacion: string;

  @Column()
  cp: string;

  @Column()
  ciudad: string;
  
  @Column()
  telefono: string;
  
}