import { Controller, Post, Body, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AuthService } from './auth.service';

export class LoginDto {
  @ApiProperty({ example: 'johndoe', description: 'The registered username' })
  username: string;

  @ApiProperty({ example: 'SuperSecret123!', description: 'The associated password' })
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
