import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { 
  createConnection, 
  ConnectionOptions, 
  getConnection, 
  Connection 
} from 'typeorm';

import { Author } from '../entities/author';
import { Category } from '../entities/Category';
import { Post } from '../entities/post';
import { Product } from '../entities/Product';
import { StorageLocation } from '../entities/StorageLocation';
import { StorageType } from '../entities/StorageType';
import { Inventory } from '../entities/Inventory';
import { InventoryStorage } from '../entities/InventoryStorage';
import { RetailOutlet } from '../entities/RetailOutlet';
import { Uom } from '../entities/Uom';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private platform: Platform) { }

  async ready() {
    try {
      
      await getConnection();
    
    } catch (ex) {
      
      // console.log('Connection not established!', ex);

      await this.createConnection();

    }
  }

  private createConnection(): Promise<Connection> {
    let dbOptions: ConnectionOptions;
    
    if (this.platform.is('cordova')) {

      dbOptions = {
        type: 'cordova',
        database: '__vcitemobile',
        location: 'default'
      };
    } else {

      dbOptions = {
        type: 'sqljs',
        location: 'browser',
        autoSave: true
      };
    }

    // additional options
    Object.assign(dbOptions, {
      logging: ['error', 'query', 'schema'],
      synchronize: true,
      entities: [
        Author,
        Category,
        Post,
        Product,
        StorageLocation,
        StorageType,
        Inventory,
        InventoryStorage,
        RetailOutlet,
        Uom,
      ]
    });

    return createConnection(dbOptions);
  }
}
