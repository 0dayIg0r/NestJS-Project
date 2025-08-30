import { Module } from '@nestjs/common';
import { UserController } from './modules/users/user.controller';
import { CreateUserUseCase } from './modules/users/useCases/create-user.usescase';
import { PrismaService } from './infra/dabatase/prisma.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase, PrismaService  ],
})
export class AppModule {}
