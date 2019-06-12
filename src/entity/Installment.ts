import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Installment extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderID: number;

  @Column()
  paymentAmt: number;

  @Column()
  paymentDate: Date;
}
