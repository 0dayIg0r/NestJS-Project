import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserUseCase } from './useCases/create-user.usescase';
import type { CreateUserDTOProps } from './dto/user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly createUseCase: CreateUserUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  
  create(@Body() data: CreateUserDTOProps) {
    return this.createUseCase.execute(data);
  }
}