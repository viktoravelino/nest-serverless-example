import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

import applicationList from './applications';
import customerList from '../customers/customers';
import userList from '../users/users';
import { PageOptionsDto, PageDto, PageMetaDto } from 'src/common/dtos';

@Injectable()
export class ApplicationsService {
  findAll(pageOptionsDto: PageOptionsDto) {
    const count = applicationList.length;
    const pageMetaDto = new PageMetaDto({
      itemCount: count,
      pageOptionsDto,
    });

    return new PageDto(
      applicationList
        .slice(pageOptionsDto.skip, pageOptionsDto.skip + pageOptionsDto.take)
        .map((application) => {
          return {
            ...application,
            applicant: customerList.find(
              (applicant) => applicant.id === application.applicantId,
            ),
            assignee: userList.find(
              (user) => user.id === application.assigneeId,
            ),
          };
        }),
      pageMetaDto,
    );
  }

  findOne(id: number) {
    const application = applicationList.find(
      (application) => application.id === id,
    );

    return {
      ...application,
      applicant: customerList.find(
        (applicant) => applicant.id === application.applicantId,
      ),
      assignee: userList.find((user) => user.id === application.assigneeId),
    };
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
