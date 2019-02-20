import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";

import { Product } from './Product';

@Entity('retailOutlet')
export class RetailOutlet {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @OneToMany(type => Product, product => product.retailOutlet)
  products: Product[];
}
