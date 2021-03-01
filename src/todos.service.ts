import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  getTodos(): object {
    return {
        'todos': [
            {
                'id': 1,
                'title': 'foo'
            },
            {
                'id': 2,
                'title': 'bar'
            }
        ]
    };
  }
}
