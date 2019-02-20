import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";

import { Product } from './Product';
import { InventoryStorage } from './InventoryStorage';

@Entity('storageLocation')
export class StorageLocation {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  isParent: boolean = false;

  @ManyToOne(type => StorageLocation, storageLocation => storageLocation.children)
  parent: StorageLocation;

  @OneToMany(type => StorageLocation, storageLocation => storageLocation.parent)
  children: StorageLocation[];
}
