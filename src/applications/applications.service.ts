import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

import applicationList from './data';
import customerList from '../customers/data';
import userList from '../users/data';

@Injectable()
export class ApplicationsService {
  findAll() {
    return applicationList.map((application) => {
      return {
        ...application,
        applicant: customerList.find(
          (applicant) => applicant.id === application.applicantId,
        ),
        assignee: userList.find((user) => user.id === application.assigneeId),
      };
    });
  }

  findOne(id: number) {
    return applicationList.find((application) => application.id === id);
  }

  create(createApplicationDto: CreateApplicationDto) {
    return 'This action adds a new application';
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  remove(id: number) {
    return `This action removes a #${id} application`;
  }
}
