import { WalletStatus } from "src/constants/index.constant";
import { AfterInsert, AfterRemove, AfterUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
class Wallet {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type:"uuid"  })
  userId: string;

  @Column({ type:"varchar", length: 20  })
  assetType: string;

  @Column({type:"varchar", length: 20 , nullable:true  })
  symbol: string;

  @Column({ type:"decimal" , precision:18 , scale:8 })
  balance: number;

  @Column({ type:"varchar",length: 20 , default:WalletStatus.ACTIVE })
  status: string;

  @Column({ type:"boolean"  , default:false})
  isDefault: boolean;

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

export default Wallet;