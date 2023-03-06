import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/common/decorators/api-paginated-response';
import { PageOptionsDto } from 'src/common/dtos';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  // @ApiResponse({
  //   status: 200,
  //   isArray: true,
  //   type: Customer,
  // })
  @ApiPaginatedResponse(Customer)
  findAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.customersService.findAll(pageOptionsDto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: Customer,
  })
  findOne(@Param('id', ParseIntPipe) id: number): Customer {
    return this.customersService.findOne(id);
  }

  // @Post()
  // create(@Body() createCustomerDto: CreateCustomerDto) {
  //   return this.customersService.create(createCustomerDto);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCustomerDto: UpdateCustomerDto,
  // ) {
  //   return this.customersService.update(+id, updateCustomerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.customersService.remove(+id);
  // }
}
