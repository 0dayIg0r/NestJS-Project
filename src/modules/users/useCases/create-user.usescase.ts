import { PrismaService } from 'src/infra/dabatase/prisma.service';

export interface CreateUserDTOProps {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(data: CreateUserDTOProps) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }, { name: data.name }],
      },
    });

    if (userExists) {
      throw new Error('User already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        id: data.id,
        email: data.email,
        name: data.name,
        password: data.password,
      },
    });

    return user;
  }
}

  

