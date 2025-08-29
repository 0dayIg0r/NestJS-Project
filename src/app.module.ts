import { Module } from '@nestjs/common';
import { UserController } from './modules/users/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
