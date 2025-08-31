import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/dabatase/prisma.service';
import { CreateUserDTOProps } from '../dto/user.dto';
import { hash } from 'bcryptjs';
import { IUserRepository } from '../repositories/use.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: CreateUserDTOProps) {
    const userExists = await this.userRepository.findByUserNameOrEmail({
      name: data.name,
      email: data.email,
    
    });

    if (userExists) {
      throw new ConflictException('User already exists');
    }

    const passwordHash = await hash(data.password, 8);
    const user = await this.userRepository.save({
      ...data,
      password: passwordHash
      
    });

    return user;
  }
}
