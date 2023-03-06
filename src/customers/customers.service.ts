import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import customerList from './customers';
import { Customer } from './entities/customer.entity';
import { PageDto, PageMetaDto, PageOptionsDto } from 'src/common/dtos';

@Injectable()
export class CustomersService {
  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<Customer>> {
    const count = customerList.length;
    const pageMetaDto = new PageMetaDto({
      itemCount: count,
      pageOptionsDto,
    });

    return new PageDto(customerList, pageMetaDto);
  }

  findOne(id: number): Customer {
    return customerList.find((customer) => customer.id === id);
  }

  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
