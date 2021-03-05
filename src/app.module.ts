import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController, UserController],
  providers: [AppService, TodoService, UserService, PrismaService],
})
export class AppModule {}
