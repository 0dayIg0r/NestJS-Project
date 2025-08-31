import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes } from '@nestjs/common';
import { CreateUserUseCase } from './useCases/create-user.usescase';
import type { CreateUserDTOProps } from './dto/user.dto';
import { CreateUserValidationPipe } from './pipe/create-user.validation';

@Controller('/users')
export class UserController {
  constructor(private readonly createUseCase: CreateUserUseCase) {}

  @Post()
  @UsePipes(new CreateUserValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  
  create(@Body() data: CreateUserDTOProps) {
    return this.createUseCase.execute(data);
  }
}