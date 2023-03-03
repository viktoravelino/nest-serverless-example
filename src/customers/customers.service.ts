import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import customerList from './data';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  findAll(): Customer[] {
    return customerList;
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
