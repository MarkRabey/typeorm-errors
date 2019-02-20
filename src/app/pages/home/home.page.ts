import { Component, OnInit } from '@angular/core';
import { getRepository, Repository } from 'typeorm';

import { Post } from 'src/app/entities/post';
import { Category } from 'src/app/entities/Category';
import { Author } from 'src/app/entities/author';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  savedPost: boolean = false;
  loadedPost: Post = null;

  constructor() { }

  ngOnInit() {
    this.runDemo();
  }

  async runDemo() {
  }

  getCategories() {
    if(this.loadedPost) {
      return this.loadedPost.categories.map(cat => cat.name).join(", ");
    }

    return '';
  }

}
