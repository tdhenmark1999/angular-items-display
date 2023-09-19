import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

export interface Item {
  ID: number;
  NAME: string;
  DESCRIPTION: string;
  IMAGE?: string;
}

@Injectable({
  providedIn: 'root'
})


export class ItemService {

  private items: Item[] = [
    {
      ID: 1,
      NAME: 'iPhone 13',
      DESCRIPTION: 'Apple iPhone 13 with A15 Bionic chip and dual-camera system.',
      IMAGE: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/177252_2020.jpg'
    },
    {
      ID: 2,
      NAME: 'Samsung Galaxy S23',
      DESCRIPTION: 'Samsung Galaxy S23 with Dynamic AMOLED 2X display and triple-camera system.',
      IMAGE: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/186714_6.jpg'
    },
    {
      ID: 3,
      NAME: 'Xiaomi Redmi Note 11',
      DESCRIPTION: 'Xiaomi Redmi Note 11 with AMOLED display and 48MP quad-camera.',
      IMAGE: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/182239_2020_8.jpg'
    },
    {
      ID: 4,
      NAME: 'iPhone 11',
      DESCRIPTION: "The iPhone 11, released by Apple in September 2019, features a 6.1-inch Liquid Retina HD display. It's powered by the A13 Bionic chip, which offers enhanced performance and efficiency.",
      IMAGE: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/173383_2020.jpg'
    },
  ];

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }
}
