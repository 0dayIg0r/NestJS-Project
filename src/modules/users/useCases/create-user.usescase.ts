import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/dabatase/prisma.service';
import { CreateUserDTOProps } from '../dto/user.dto';


@Injectable()
export class CreateUserUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(data: CreateUserDTOProps) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }, { name: data.name }],
      },
    });

    if (userExists) {
    throw new ConflictException('User already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        id: data.id,
        email: data.email,
        name: data.name,
        password: data.password,
      },
      select:{
        id: true,
        email: true,
        name: true,
      }
    });

    return user;
  }
} 

  

