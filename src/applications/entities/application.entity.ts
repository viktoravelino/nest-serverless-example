import { ApiProperty } from '@nestjs/swagger';

export enum Priority {
  Blocker = 'blocker',
  Critical = 'critical',
  High = 'high',
  Highest = 'highest',
  Low = 'low',
  Lowest = 'lowest',
  Medium = 'medium',
  Major = 'major',
  Minor = 'minor',
  Trivial = 'trivial',
  None = 'none',
}

export enum Status {
  Active = 'active',
  Fraud = 'fraud',
  Fulfillment = 'fulfillment',
  Complete = 'complete',
  Cancelled = 'cancelled',
}

export enum SubStatus {
  UnresolvedStipulations = 'Unresolved Stipulations',
  CoApplicantFlag = 'Co-applicant flag',
  MissingInformation = 'Missing information',
  VerifyingIdentity = 'Verifying identity',
  InDisbursement = 'In disbursement',
  Declined = 'Declined',
  DuplicateApplication = 'Duplicate application',
}
export class Application {
  @ApiProperty({ example: 'blocker' })
  priority: Priority;

  @ApiProperty({ example: 2 })
  applicantId: number;

  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '2023-03-03' })
  submittedDate: string;

  @ApiProperty({ example: 'active' })
  status: Status;

  @ApiProperty({ example: 'sub-status' })
  subStatus: SubStatus;

  @ApiProperty({ example: 5 })
  assigneeId: number;

  @ApiProperty({ example: '2023-03-03' })
  updatedAt: string;

  @ApiProperty({ example: 'Consumer Credit Card' })
  productType: string;

  @ApiProperty({ example: 'Cash Rewards® Visa®' })
  productName: string;

  @ApiProperty({ example: '1300000' })
  limiteRequested: number;

  @ApiProperty({ example: 'DTI' })
  referralRule: string;
}
