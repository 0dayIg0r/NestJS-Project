import { CreateUserDTOProps, UserCreateDTO, UsernameAndEmail } from '../dto/user.dto';

export abstract class IUserRepository {
  abstract findByUserNameOrEmail(data: UsernameAndEmail): Promise<UserCreateDTO | null>;
  abstract save(data: CreateUserDTOProps): Promise<UserCreateDTO>;
}
