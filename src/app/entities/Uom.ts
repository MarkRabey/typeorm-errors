import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";

import { Product } from './Product';

@Entity('uom')
export class Uom {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  pluralName: string;

  @OneToMany(type => Product, product => product.uom)
  products: Product[];
}
