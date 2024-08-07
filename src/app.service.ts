import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getProductItems(): Promise<Products.Item[]> {
    return [
      {
        'id': 1,
        'name': 'Product 1',
        'description': 'Product 1 description',
        'price': 10,
        'image': 'https://via.placeholder.com/150'
      },
      {
        'id': 2,
        'name': 'Product 2',
        'description': 'Product 2 description',
        'price': 20,
        'image': 'https://via.placeholder.com/150'
      }
    ]
  }
}
