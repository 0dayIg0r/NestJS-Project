import { ArgumentMetadata, BadRequestException, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { CreateUserDTOProps } from "../dto/user.dto";


@Injectable()
export class CreateUserValidationPipe implements PipeTransform{
    transform({name, email, password}: CreateUserDTOProps, metadata: ArgumentMetadata) {
        
        if(!name || !email || !password){
            throw new HttpException('All fields are necessary', HttpStatus.UNPROCESSABLE_ENTITY)
        }


        return {
            name,
            email,
            password 
        }
    }
}