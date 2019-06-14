import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dataOfBirth: Date;

  @Column()
  phoneNumber: number;

  @Column()
  email: string;

  @Column()
  NRIC: string;

}
