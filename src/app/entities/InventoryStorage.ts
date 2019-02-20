import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
  UpdateDateColumn,
} from "typeorm";

import { Inventory } from './Inventory';
import { StorageLocation } from './StorageLocation';

@Entity('inventory-storage')
export class InventoryStorage {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column()
  qty: number;

  @ManyToOne(type => Inventory, inventory => inventory.inventoryStorage)
  inventory: Inventory;

  @ManyToOne(type => StorageLocation)
  storageLocation: StorageLocation;
}
