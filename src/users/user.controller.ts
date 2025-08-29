import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';

interface ParamsUser {
  id: string;
  idEmpresa: string;
}

interface QueryUser {
  p: string;
}

interface User {
  name: string;
  age: number;
}

@Controller('/users')
export class UserController {
  @Get('/:id')
  findById(@Param() params: ParamsUser) {
    return 'Usuário com ID: ' + params.id;
  }

  @Get('/findByPages')
  findByPages(@Query() param: QueryUser) {
    return 'Listagem de usuários por página: ' + param.p;
  }

  @Post('/create')
  create(@Body() user: User) {
    return{
        ...user,
        id: randomUUID()
    }
  }
}
