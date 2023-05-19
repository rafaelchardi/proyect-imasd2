import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/jwt-payload';
import { AuthService } from '../auth.service';
import { extractTokenFromHeader } from '../../shared/utils';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwtService: JwtService,
    private authService:AuthService,
  ) {}


  async canActivate( context: ExecutionContext ): Promise<boolean>{
    
    const request = context.switchToHttp().getRequest();
    const token = extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('There is no bearer token');
    }

    try {
      
      const payload = await this.jwtService.verifyAsync<JwtPayload>(
        token, { secret: process.env.JWT_SEED }
      );
      
      const user = await this.authService.findUserById( payload.user.id+'' );
      
      if ( !user ) throw new UnauthorizedException('User does not exists');
      
      if ( !user.isActive ) throw new UnauthorizedException('User is not active');
      
      request['user'] = user;
      
    } catch (error) {
      
      throw new UnauthorizedException();
    }
   

    return true;
  }

}
