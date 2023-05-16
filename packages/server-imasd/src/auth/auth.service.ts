import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcryptjs from 'bcryptjs';

import { LoginDto } from './dto';

import { User } from './entities/user.entity';

import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';
import { UserData } from './data/user.data';

@Injectable()
export class AuthService {
  private userModel = new UserData();
  constructor(
    private jwtService: JwtService,
   ) {}

  


  async login( loginDto: LoginDto ):Promise<LoginResponse> {

    const { email, password } = loginDto;
 
    const user:User = await this.userModel.findOne({ email });
    if ( !user ) {
      throw new UnauthorizedException('Not valid credentials - email');
    }
    
    if ( !bcryptjs.compareSync( password, user.password ) ) {
     // throw new UnauthorizedException('Not valid credentials - password');
    }

    
    const { password:_, ...rest  } = loginDto;
      
    return {
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    }
  
  }
  async findUserById( id: string ) {
    const user = await this.userModel.findById( id );
    const { password, ...rest } = user;
    return rest;
  }


  /* findAll(): Promise<User[]> {
    return '';
  } */

/*   async findUserById( id: string ) {
    const user = await this.userModel.findById( id );
    const { password, ...rest } = user.toJSON();
    return rest;
  }


  findOne(id: number) {
    return `This action returns a #${id} auth`;
  } */

 /*  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  } */

  getJwtToken( payload: JwtPayload ) {
    const token = this.jwtService.sign(payload);
    return token;
  }

}



 /*  async create(createUserDto: CreateUserDto): Promise<User> {
    
    try {
      
      const { password, ...userData } = createUserDto;
           
      const newUser = new this.userModel({
        password: bcryptjs.hashSync( password, 10 ),
        ...userData
      });

       await newUser.save();
       const { password:_, ...user } = newUser.toJSON();
       
       return user;
      
    } catch (error) {
      if( error.code === 11000 ) {
        throw new BadRequestException(`${ createUserDto.email } already exists!`)
      }
      throw new InternalServerErrorException('Something terribe happen!!!');
    }

  } */
/* 
  async register( registerDto: RegisterUserDto ): Promise<LoginResponse> {

    const user = await this.create( registerDto );

    return {
      user: user,
      token: this.getJwtToken({ id: user._id })
    }
  } */
