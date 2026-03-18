import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'johndoe', description: 'The unique username of the user' })
  username: string;

  @ApiProperty({ example: 'john@example.com', description: 'The email address of the user' })
  email: string;

  @ApiProperty({ example: '123 Main St, Springfield', description: 'The physical address of the user' })
  address: string;

  @ApiPropertyOptional({ example: 'SuperSecret123!', description: 'The password for authentication' })
  password?: string;
}
