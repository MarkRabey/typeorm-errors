import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Product } from './Product';
import { InventoryStorage } from './InventoryStorage';

@Entity('inventory')
export class Inventory {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column({ nullable: true })
  shoppingListStatus: number = 0;

  @Column({ nullable: true })
  shoppingListQuantity: number;

  @Column({ nullable: true })
  putAwayStatus: number;

  @OneToOne(type => Product)
  @JoinColumn()
  product: Product;

  @OneToMany(type => InventoryStorage, inventoryStorage => inventoryStorage.inventory, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  inventoryStorage: InventoryStorage[];
}
