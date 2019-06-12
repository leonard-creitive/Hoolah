import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class UserCard extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userID: number;

  @Column()
  cardNumber: number;

  @Column()
  expirationDate: Date;

  @Column()
  CVC: number;

  @Column()
  cardHolderName: string;

  @Column()
  cardNickname: string;
}
