import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Payment extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transactionID: number;

  @Column()
  paymentAmt: number;

  @Column()
  paymentDate: Date;
}
