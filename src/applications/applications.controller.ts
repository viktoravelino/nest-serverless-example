import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ApplicationsService } from './applications.service';
import { Application } from './entities/application.entity';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    isArray: true,
    type: Application,
  })
  findAll() {
    return this.applicationsService.findAll();
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
