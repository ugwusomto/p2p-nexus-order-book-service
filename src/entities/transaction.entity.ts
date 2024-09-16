import { TransactionStatus, WalletStatus } from "src/constants/index.constant";
import { AfterInsert, AfterRemove, AfterUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type:"uuid"  })
  walletId: string;

  @Column({type:"varchar", length: 20 , nullable:true  })
  type: string;

  @Column({type:"varchar", length: 200 , nullable:true  })
  reference: string;

  @Column({ type:"decimal" , precision:18 , scale:8 })
  amount: number;

  @Column({ type:"decimal" , precision:18 , scale:8 })
  previousBalance: number;

  @Column({ type:"decimal" , precision:18 , scale:8 })
  newBalance: number;

  @Column({ type:"varchar",length: 20 , default:TransactionStatus.PENDING })
  status: string;

  @CreateDateColumn({
    type: "timestamp"
  })
  createdDate: Date

  @UpdateDateColumn({
    type: "timestamp"
  })
  updatedDate: Date

  @AfterInsert()
  logInsert() {
    console.log(this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log( this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log( this.id);
  }
}

export default Transaction;