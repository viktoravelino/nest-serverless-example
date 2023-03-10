import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/common/decorators/api-paginated-response';
import { PageOptionsDto } from 'src/common/dtos';
import { ApplicationsService } from './applications.service';
import { Application } from './entities/application.entity';

@Controller('applications')
@ApiTags('Applications')
@UseInterceptors(ClassSerializerInterceptor)
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get()
  @ApiPaginatedResponse(Application)
  findAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.applicationsService.findAll(pageOptionsDto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: Application,
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.applicationsService.findOne(id);
  }

  // @Post()
  // create(@Body() createApplicationDto: CreateApplicationDto) {
  //   return this.applicationsService.create(createApplicationDto);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateApplicationDto: UpdateApplicationDto,
  // ) {
  //   return this.applicationsService.update(+id, updateApplicationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.applicationsService.remove(+id);
  // }
}
