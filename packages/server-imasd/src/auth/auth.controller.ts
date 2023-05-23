import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

import { LoginDto } from './dto';
import { AuthGuard } from './guards/auth.guard';

import { User } from 'packages/library-imasd/src/lib/interfaces/user.interface';
import { LoginResponse } from 'packages/library-imasd/src/lib/interfaces/login-response.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  login( @Body() loginDto: LoginDto  ) {
    return this.authService.login( loginDto );
  }
/*   @UseGuards( AuthGuard )
  @Get()
  findAll( @Request() req: Request ) {
    // const user = req['user'];
    
    // return user;
    return this.authService.findAll();
  } */


  // LoginResponse
  @ApiBearerAuth('defaultBearerAuth')
  @UseGuards( AuthGuard )
  @Get('check-token')
  checkToken( @Request() req: Request ): LoginResponse {
      
    const user = req['user'] as User;

    return {
      user,
      token: this.authService.getJwtToken({ user })
    }

  }
  
/*
 create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

@Post('/register')
  register( @Body() registerDto: RegisterUserDto  ) {
    return this.authService.register( registerDto );
  }
 */


  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
