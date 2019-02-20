import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
} from "typeorm";

import { Category } from './Category';
import { StorageType } from './StorageType';
import { StorageLocation } from './StorageLocation';
import { Uom } from './Uom';
import { RetailOutlet } from './RetailOutlet';
import { Inventory } from './Inventory';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  minQty?: number;

  @Column({ nullable: true })
  weeklyNeed?: number;

  @Column({ nullable: true })
  productLife?: number;

  @Column({ nullable: true })
  alert?: number;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(type => Category, category => category.products, {
    cascade: ['insert']
  })
  category: Category;

  @ManyToOne(type => StorageLocation, {
    cascade: ['insert']
  })
  storageLocation: StorageLocation;

  @ManyToOne(type => StorageType, storageType => storageType.products, {
    cascade: ['insert']
  })
  storageType: StorageType;

  @ManyToOne(type => Uom, uom => uom.products, {
    cascade: ['insert']
  })
  uom: Uom;

  @ManyToOne(type => RetailOutlet, retailOutlet => retailOutlet.products, {
    cascade: ['insert']
  })
  retailOutlet: RetailOutlet;

  @OneToOne(type => Inventory, inventory => inventory.product, { cascade: true })
  inventory: Inventory;
}
