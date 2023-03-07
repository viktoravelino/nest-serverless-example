import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export enum RentOrOwn {
  Rent = 'rent',
  Own = 'own',
}

export class Customer {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'johndoe@example.com' })
  email: string;

  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({
    type: {
      creditScore: { type: 'number', example: 700 },
      totalDebt: { type: 'number', example: 10000 },
    },
  })
  borrowerCreditFactors: {
    creditScore: number;
    totalDebt: number;
  };

  @ApiProperty({
    type: {
      statedIncome: { type: 'number', example: 100000 },
      incomeSource: { type: 'string', example: 'Employment' },
      jobTitle: { type: 'string', example: 'Software Engineer' },
    },
  })
  borrowerIncome: {
    statedIncome: number;
    incomeSource: string;
    jobTitle: string;
  };

  @ApiProperty({
    type: {
      rentOrOwn: {
        type: 'string',
        enum: RentOrOwn,
        example: RentOrOwn.Own,
      },
    },
  })
  housingInformation: {
    rentOrOwn: RentOrOwn;
  };

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  dob: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  ssn: string;

  @ApiProperty()
  atPnc: boolean;

  @ApiProperty({
    type: 'object',
    properties: {
      id: { type: 'number', example: 2 },
      email: { type: 'string', example: 'johndoe@example.com' },
      firstName: { type: 'string', example: 'John' },
      lastName: { type: 'string', example: 'Doe' },
      phoneNumber: { type: 'string', example: '1234567890' },
      dob: { type: 'string', example: '1990-01-01' },
      address: { type: 'string', example: '123 Main St' },
      ssn: { type: 'string', example: '123456789' },
      atPnc: { type: 'boolean', example: true },
    },
  })
  coBorrower: Omit<
    Customer,
    | 'coBorrower'
    | 'housingInformation'
    | 'borrowerIncome'
    | 'borrowerCreditFactors'
  >;
}
