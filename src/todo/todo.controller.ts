import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo as TodoModel } from '@prisma/client';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // @Get(':id')
  // async getTodoById(@Param('id') id: string): Promise<TodoModel> {
  //   return this.todoService.todo({ id: Number(id) });
  // }

  @Post()
  async createTodo(
    @Body() postData: { title: string; content?: string; authorEmail: string; },
  ): Promise<TodoModel> {
    const { title, content, authorEmail } = postData;
    return this.todoService.createTodo({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

}
