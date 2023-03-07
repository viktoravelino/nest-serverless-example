import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function configSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Fake API')
    .setDescription('Returns fake data')
    .setVersion('1.0')
    .addTag('api')
    .addTag('Users', 'Employee Resource')
    .addTag('Applications', 'Application Resource')
    .addTag('Customers', 'Client Resource')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
