import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";

import { Product } from './Product';

@Entity('storageType')
export class StorageType {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @OneToMany(type => Product, product => product.storageType)
  products: Product[];
}
