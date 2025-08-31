import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "./useCases/create-user.usescase";
import { PrismaService } from "src/infra/dabatase/prisma.service";
import { UserPrismaRepository } from "./repositories/prisma/user.prisma.repository";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [CreateUserUseCase, PrismaService,{
        provide: 'UserRepository',
        useClass: UserPrismaRepository,
    }],  
})

export class UserModule{

}