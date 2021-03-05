import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  Todo,
  Prisma
} from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async todo(todoWhereUniqueInput: Prisma.TodoWhereUniqueInput): Promise<Todo | null> {
    return this.prisma.todo.findUnique({
      where: todoWhereUniqueInput
    });
  }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }

}
