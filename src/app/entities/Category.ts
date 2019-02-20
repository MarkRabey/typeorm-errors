import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";

import { Product } from './Product';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  isParent: boolean = false;

  @ManyToOne(type => Category, category => category.children)
  parent: Category;

  @OneToMany(type => Category, category => category.parent)
  children: Category[];

  @OneToMany(type => Product, product => product.category)
  products: Product[];
}
