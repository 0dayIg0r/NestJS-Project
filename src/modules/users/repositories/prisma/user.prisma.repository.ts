import { PrismaService } from 'src/infra/dabatase/prisma.service';
import {
  UsernameAndEmail,
  UserCreateDTO,
  CreateUserDTOProps,
} from '../../dto/user.dto';
import { IUserRepository } from '../use.repository';
import { Injectable } from '@nestjs/common';


@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByUserNameOrEmail(
    data: UsernameAndEmail,
  ): Promise<UserCreateDTO | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }, { name: data.name }],
      },
    });
    if (!user) return null;
    return {
      ...user,
      createadAt: user.createdAt,
    };
  }
  async save(data: CreateUserDTOProps): Promise<UserCreateDTO> {
    const user = await this.prisma.user.create({
      data,
    });
    
    return {
      ...user,
      createadAt: user.createdAt,
    };
  }
}
