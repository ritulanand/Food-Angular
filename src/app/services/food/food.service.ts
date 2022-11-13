import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    return tag == 'All' ?
     this.getAll() :
     this.getAll().filter(food => food.tags?.includes(tag))
    // if(tag == 'All'){
    //   return this.getAll();
    // }else{
    //   return this.getAll().filter(food => food.tags?.includes(tag))
    // }

  }

  getAllTag():Tag[]{
    return [
      {
        name: 'All', count: 14
      },
      {
        name: 'Fast Food', count: 4
      },
      {
        name: 'Pizza', count: 2
      },
      {
        name: 'Lunch', count: 3
      },
      {
        name: 'Slowfood', count: 2
      },
      {
        name: 'Hamburger', count: 1
      },
      {
        name: 'Fry', count: 5
      },
      {
        name: 'Soup', count: 1
      }
    ];
    
  }

  getAll():Foods[]{
    return [
     {
      id: 1,
      name: 'fried potatos',
      price: 2,
      cookTime: '15-20',
      favourite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/food 1.jpg',
      tags: ['Fast Food', 'Fry']
     },
     {
      id: 2,
      name: 'fried chips',
      price: 2,
      cookTime: '15-20',
      favourite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/food 2.jpg',
      tags: ['All', 'Fry']
     },
     {
      id: 3,
      name: 'fried rice',
      price: 2,
      cookTime: '15-20',
      favourite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/food 3.jpg',
      tags: ['Pizza', 'Fry']
     },
     {
      id: 4,
      name: 'fried potatos',
      price: 2,
      cookTime: '15-20',
      favourite: false,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/food 5.jpg',
      tags: ['Fast Food', 'Fry']
     },
     {
      id: 5,
      name: 'fried potatos',
      price: 2,
      cookTime: '15-20',
      favourite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/food 6.jpg',
      tags: ['Slowfood', 'Fry']
     },
     {
      id: 6,
      name: 'fried potatos',
      price: 2,
      cookTime: '15-20',
      favourite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/food 7.jpg',
      tags: ['Hamburger', 'pizza']
     },
     {
      id: 7,
      name: 'fried potatos',
      price: 2,
      cookTime: '15-20',
      favourite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/food 8.jpg',
      tags: ['Fast Food', 'Lunch']
     },
     {
      id: 8,
      name: 'fried potatos',
      price: 2,
      cookTime: '15-20',
      favourite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/food 8.jpg',
      tags: ['Soup', 'pizza']
     }
    ]
  }

}
