import { ApiProperty } from '@nestjs/swagger';

export class Application {
  @ApiProperty({ example: 'blocker' })
  priority:
    | 'blocker'
    | 'critical'
    | 'high'
    | 'highest'
    | 'low'
    | 'lowest'
    | 'medium'
    | 'major'
    | 'minor'
    | 'trivial';

  @ApiProperty({ example: 2 })
  applicantId: number;

  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '2023-03-03' })
  submittedDate: string;

  @ApiProperty({ example: 'active' })
  status: 'active' | 'fraud' | 'fulfillment' | 'complete' | 'cancelled';

  @ApiProperty({ example: 'sub-status' })
  subStatus: string;

  @ApiProperty({ example: 5 })
  assigneeId: number;
}
