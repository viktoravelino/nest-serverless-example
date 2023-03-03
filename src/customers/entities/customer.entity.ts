import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'johndoe@example.com' })
  email: string;

  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;
}
