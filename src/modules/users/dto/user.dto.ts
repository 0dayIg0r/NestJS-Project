export type CreateUserDTOProps ={
  id: string;
  name: string;
  email: string;
  password: string;
}


export type UsernameAndEmail = {
  email: string,
  name: string
}

export type UserCreateDTO = {
  id: string,
  createadAt: Date,

}  & CreateUserDTOProps