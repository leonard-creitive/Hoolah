import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Transaction extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userID: number;

  @Column()
  merchant: string;

  @Column()
  transactionDate: Date;

  @Column()
  transactionTotalAmt: number;

  @Column()
  installmentAmt: number;

  @Column()
  installmentPlan: number;

}
